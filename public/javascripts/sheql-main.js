var Main = (function () {

	function Main() {}
	var _proto = Main.prototype;

	_proto._init = function (lexer, tree) {
		this.lexer = lexer;
		this.tree = tree;
	};

	_proto._colonX1 = function (token) {
		if (!token.match(/x/)) {
			return '0';
		}

		token = token
			.replace(/\]/, '')
			.replace(/\:[nl]\[/, '');

		if (token === 'x') {
			return '1';
		}
		return token.replace('x', '');

	};

	_proto._colonX0 = function (token) {
		token = token
			.replace(/\:(n|l)/, '')
			.replace(/\[/, '')
			.replace(/.*x/, '')
			.replace(/\]/, '')
			.replace('+', '');
		if (token === '') {
			return '0';
		}
		return token;
	};

	_proto._colonType = function (token) {
		return token.replace(/\:/, '').replace(/\[.*/, '');
	};

	_proto._colonValue = function (token) {

		return {
			type: this._colonType(token),
			x0: parseInt(this._colonX0(token), 10),
			x1: parseInt(this._colonX1(token), 10)

		};
	};

	_proto._dayFilter = function (elementCollection, filterKey) {
		var filteredCollection = [];
		_.each(elementCollection, function (el) {
			filteredCollection.push(_.filter(el, function (dt) {
				return ('.' + dt.getDayName()) === filterKey;
			}));
		});
		return filteredCollection;
	};

	_proto._dateFilter = function (elementCollection, iType, x0, x1) {
		var filteredCollection = [];
		_.each(elementCollection, function (el) {
			filteredCollection.push(_.filter(el, function (dt, key) {
				var temp = key - x0;
				return ((temp + 1) % x1) === 0;
			}));
		});
		return filteredCollection;
	};

	_proto._dotFilter = function (elementCollection, filterKey) {
		return _.filter(elementCollection, function (e) {
			return _.contains(e.props, filterKey);
		});

	};
	_proto._colonFilter = function (elementCollection, iType, x0, x1, filterKey) {
		return _.filter(elementCollection, function (c) {
			temp = c.indices[filterKey] - x0;
			return ((temp + 1) % x1) === 0;
		});
	};

	_proto._yearOperations = function (dateCollection, yTokens) {
		dateCollection = this.tree
			.yearDateCollectionBuilder(dateCollection);
		_.each(yTokens, function (filtertoken) {
			if (filtertoken[0] === ':') {
				var colonVal = this._colonValue(filtertoken);
				dateCollection = this
					._colonFilter(dateCollection, colonVal.type, colonVal.x0, colonVal.x1, 'a');
			} else if (filtertoken[0] === '.') {
				dateCollection = this._dotFilter(dateCollection, filtertoken);
			}
		}, this);
		return dateCollection;
	};

	_proto._monthOperations = function (dateCollection, mTokens, isArray) {
		dateCollection = this.tree
			.monthDateCollectionBuilder(dateCollection, isArray);
		_.each(mTokens, function (filtertoken) {
			if (filtertoken[0] === ':') {
				var colonVal = this._colonValue(filtertoken);
				dateCollection = this
					._colonFilter(dateCollection, colonVal.type, colonVal.x0, colonVal.x1, isArray ? 'a' : 'y');
			} else if (filtertoken[0] === '.') {
				dateCollection = this._dotFilter(dateCollection, filtertoken);
			}
		}, this);
		return dateCollection;
	};

	_proto._weekOperations = function (dateCollection, wTokens, parentTag) {
		dateCollection = this.tree
			.weekDateCollectionBuilder(dateCollection, parentTag);
		_.each(wTokens, function (filtertoken) {
			if (filtertoken[0] === ':') {
				var colonVal = this._colonValue(filtertoken);
				dateCollection = this
					._colonFilter(dateCollection, colonVal.type, colonVal.x0, colonVal.x1, parentTag ? parentTag : 'a');
			} else if (filtertoken[0] === '.') {
				dateCollection = this._dotFilter(dateCollection, filtertoken);
			}
		}, this);
		return dateCollection;
	};

	_proto._dateOperations = function (dateCollection, dTokens, isArray) {
		dateCollection = this.tree
			.dateDateCollectionBuilder(dateCollection, isArray);
		_.each(dTokens, function (filtertoken) {
			if (filtertoken[0] === ':') {
				var colonVal = this._colonValue(filtertoken);
				dateCollection = this
					._dateFilter(dateCollection, colonVal.type, colonVal.x0, colonVal.x1);
			} else if (filtertoken[0] === '.') {
				dateCollection = this._dayFilter(dateCollection, filtertoken);
			}
		}, this);
		return dateCollection;
	};

	_proto._parseTokens = function (tokens, startDate, endDate) {
		var dateCollection = this._buildDateRangeCollection(startDate, endDate);
		if (tokens.y) {
			//Perform operations for Y
			dateCollection = this._yearOperations(dateCollection, tokens.y);
		}

		if (tokens.m) {
			if (tokens.y) {
				dateCollection = this._monthOperations(dateCollection, tokens.m);
			} else {
				dateCollection = this._monthOperations(dateCollection, tokens.m, true);
			}
			//Perform operations for M
		}
		if (tokens.w) {
			if (tokens.m) {
				dateCollection = this._weekOperations(dateCollection, tokens.w, 'm');
			} else if (tokens.y) {
				dateCollection = this._weekOperations(dateCollection, tokens.w, 'y');
			} else {
				dateCollection = this._weekOperations(dateCollection, tokens.w);
			}
			//Perform operations for w
		}
		var tempResults;
		if (tokens.d) {
			if (tokens.m || tokens.y || tokens.w) {
				dateCollection = this._dateOperations(dateCollection, tokens.d);
			} else {
				dateCollection = this._dateOperations(dateCollection, tokens.d, true);
			}
			tempResults = dateCollection;
			//Perform operations for d
		} else {
			tempResults = _.pluck(dateCollection, 'dates');
		}
		var result = [];
		_.each(tempResults, function (arr) {
			result = _.union(result, arr);
		});
		dateCollection = result;
		return dateCollection;

	};

	_proto._buildDateRangeCollection = function (_startDate, _endDate) {
		var dateCollection = [];
		// var startDate = moment(_startDate, 'YYYY-MM-DD');
		// var endDate = moment(_endDate, 'YYYY-MM-DD');
		var iter = moment(_startDate).twix(_endDate).iterate("days");
		while (iter.hasNext()) {
			dateCollection.push(iter.next().toDate());
		}
		return dateCollection;
	};

	_proto._getTokens = function (str) {
		return this.lexer.extractTokens(str);
	};

	_proto.execute = function (str, startDate, endDate) {
		var tokens = this._getTokens(str);
		return this._parseTokens(tokens, startDate, endDate);
	};

	return Main;

})();