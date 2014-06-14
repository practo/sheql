_ = require('underscore');

function Lexer() {}
var _proto = Lexer.prototype;

_proto._splitOnTokens = function (str) {
	return _.filter(str.split(/( |:|\.|\!)/), function (i) {
		return i !== ' ' && i !== '';
	});
};

_proto._ast = function (tokenCollection) {
	var tree = {},
		tokenType,
		lastBaseToken;

	_.each(tokenCollection, function (token) {

		if (token.match(/(y|m|w|d)/)) {
			tree[token] = [];
			lastBaseToken = token;
		} else if (token.match(/(:|\.|\!)/)) {
			tokenType = token;
		} else {
			tree[lastBaseToken].push({
				filterType: tokenType,
				filterOn: token
			});
		}
	});
	return tree;
};

_proto.parser = function (str) {

};

module.exports = Lexer;