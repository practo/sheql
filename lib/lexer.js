_ = require('underscore');

function Lexer() {}
var _proto = Lexer.prototype;

_proto._splitOnTokens = function (str) {
	return _.filter(str.split(/( |:|\.|\!)/), function (i) {
		return i !== ' ' && i !== '';
	});
};

_proto._x0Extractor = function (str) {
	var x0;

	x0 = str
		.replace(/\]/, '')
		.replace(/.*\[/, '')
		.replace(/.*x/, '');
	x0 = x0 === '' ? 0 : x0;
	return parseInt(x0, 10);
};

_proto._x1Extractor = function (str) {
	var x1;
	if (str.match('x')) {
		x1 = str
			.replace(/x.*/, '')
			.replace(/.*\[/, '');
		if (x1 === '') {
			x1 = 1;
		} else {
			x1 = parseInt(x1, 10);
		}

	} else {
		x1 = 0;
	}
	return x1;
};

_proto._parseColonFilters = function (str) {

	var filter = {};
	filter.from = str[0];
	filter.x0 = this._x0Extractor(str);
	filter.x1 = this._x1Extractor(str);

	return filter;
};

_proto._ast = function (tokenCollection) {
	var tree = {},
		tokenType,
		lastBaseToken,
		filterOn;

	_.each(tokenCollection, function (token) {

		if (token.match(/(y|m|w|d)/)) {
			tree[token] = [];
			lastBaseToken = token;
		} else if (token.match(/(:|\.|\!)/)) {
			tokenType = token;
		} else {
			if (tokenType === ':') {
				filterOn = this._parseColonFilters(token);
			} else {
				filterOn = token;
			}
			tree[lastBaseToken].push({
				filterType: tokenType,
				filterOn: filterOn
			});
		}
	}, this);
	return tree;
};

_proto.parser = function (str) {

};

module.exports = Lexer;