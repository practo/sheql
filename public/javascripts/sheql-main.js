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

	_proto._dotFilter = function (elementCollection, filterKey) {
		return _.filter(elementCollection, function (e) {
			return _.contains(e.props, filterKey);
		});

	};
	_proto._colonFilter = function (elementCollection, iType, x0, x1) {
		var filteredCollection = [];

		_.times(elementCollection.length, function (x) {
			var val = (x1 * x + x0);
			if (val > -1 && val < elementCollection.length) {
				filteredCollection.push(elementCollection[val]);
			}
		});
		return filteredCollection;
	};

	_proto._yearOperations = function (dateCollection) {
		dateCollection = this.tree
			.yearDateCollectionBuilder(dateCollection);
		return dateCollection;
	};

	_proto._monthOperations = function (dateCollection, isArray) {
		dateCollection = this.tree
			.monthDateCollectionBuilder(dateCollection, isArray);
		return dateCollection;
	};

	_proto._weekOperations = function (dateCollection, parentTag) {
		dateCollection = this.tree
			.weekDateCollectionBuilder(dateCollection, parentTag);
		return dateCollection;
	};

	_proto._dateOperations = function (dateCollection, isArray) {
		console.log('Is Array', isArray);
		dateCollection = this.tree
			.dateDateCollectionBuilder(dateCollection, isArray);
		return dateCollection;
	};

	_proto._parseTokens = function (tokens, startDate, endDate) {
		var dateCollection = this._buildDateRangeCollection(startDate, endDate);
		if (tokens.y) {
			//Perform operations for Y
			dateCollection = this._yearOperations(dateCollection);
		}
		if (tokens.m) {
			if (tokens.y) {
				dateCollection = this._monthOperations(dateCollection);
			} else {
				dateCollection = this._monthOperations(dateCollection, true);
			}
			//Perform operations for M
		}
		if (tokens.w) {
			if (tokens.m) {
				dateCollection = this._weekOperations(dateCollection, 'm');
			} else if (tokens.y) {
				dateCollection = this._weekOperations(dateCollection, 'y');
			} else {
				dateCollection = this._weekOperations(dateCollection);
			}
			//Perform operations for w
		}
		// console.log(dateCollection);
		if (tokens.d) {
			if (tokens.m || tokens.y || tokens.w) {
				dateCollection = this._dateOperations(dateCollection);
			} else {
				dateCollection = this._dateOperations(dateCollection, true);
			}
			//Perform operations for d
		} else {
			var result = [];
			var temp = _.pluck(dateCollection, 'dates');
			_.each(temp, function (arr) {
				result = _.union(result, arr);
			});
			dateCollection = result;
		}

		return dateCollection;

	};

	_proto._buildDateRangeCollection = function (_startDate, _endDate) {
		var dateCollection = [];
		var startDate = moment(_startDate, 'YYYY-MM-DD');
		var endDate = moment(_endDate, 'YYYY-MM-DD');
		var iter = moment(startDate).twix(endDate).iterate("days");
		while (iter.hasNext()) {
			dateCollection.push(iter.next().toDate());
		}
		return dateCollection;
	};

	_proto._getTokens = function (str) {
		return this.lexer.extractTokens(str);
	};

	return Main;

})();