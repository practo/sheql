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

	_proto._dotFilter = function () {};
	_proto._colonFilter = function () {};

	_proto._yearOperations = function () {

	};

	_proto._parseTokens = function (tokens) {
		if (tokens.y) {
			//Perform operations for Y
		}
		if (tokens.m) {
			//Perform operations for M
		}
		if (tokens.w) {
			//Perform operations for w
		}
		if (tokens.d) {
			//Perform operations for d
		}

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