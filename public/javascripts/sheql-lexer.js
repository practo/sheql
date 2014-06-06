var Lexer = (function () {

    function Lexer() {}
	var _proto = Lexer.prototype;

	_proto.tokenizer = function (str) {
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