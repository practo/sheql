var Lexer = (function () {

	function Lexer() {}
	var _proto = Lexer.prototype;

	_proto.space_tokenizer = function (str) {
		return str.split(' ');
	};

	_proto.dot_tokenizer = function (str) {
		var returnValue = [];
		var tmpStr = "";
		_.each(str, function (i) {
			if (i === '.') {
				returnValue.push(tmpStr);
				tmpStr = '.';
			} else {
				tmpStr += i;
			}
		});
		returnValue.push(tmpStr);
		return returnValue;
	};

	_proto.colon_tokenizer = function (str) {
		var returnValue = [];
		var tmpStr = "";
		_.each(str, function (i) {
			if (i === ':') {
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