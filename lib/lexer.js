_ = require('underscore');

function Lexer() {}
var _proto = Lexer.prototype;

_proto._splitOnTokens = function (str) {
	return _.filter(str.split(/( |:|\.|\!)/), function (i) {
		return i !== ' ' && i !== '';
	});
};

_proto.parser = function (str) {

};

module.exports = Lexer;