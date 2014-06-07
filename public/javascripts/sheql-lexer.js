var Lexer = (function () {

	function Lexer() {}
	var _proto = Lexer.prototype;

	_proto.extractTokens = function (str) {
		var tokens = this._SplitTokens(str);
		var lastToken;
		var groupedTokens = {};
		_.each(tokens, function (token) {
			if (token.match(/^(m|w|d|y)$/)) {
				groupedTokens[token] = [];
				lastToken = token;
			} else {
				groupedTokens[lastToken].push(token);
			}
		});

		return groupedTokens;

	};

	_proto._SplitTokens = function (str) {
		var returnValue = [];
		var tmpStr = "";
		_.each(str, function (i) {
			if (i === ' ') {
				returnValue.push(tmpStr);
				tmpStr = '';
			} else if (i === '.') {
				returnValue.push(tmpStr);
				tmpStr = '.';
			} else if (i === ':') {
				returnValue.push(tmpStr);
				tmpStr = ':';
			} else {
				tmpStr += i;
			}
		});
		returnValue.push(tmpStr);
		return returnValue;
	};
	return Lexer;
})();