var TokenFactory = (function () {

	var TAG = 'tag',
		COLON = 'colon',
		DOT = 'dot',
		EXCLAMATION = 'exclamation';

	function TokenFactory() {
		this.tokenConstructorCollection = {};
	}
	var _proto = TokenFactory.prototype;

	_proto.register = function (type, constructor) {
		this.tokenConstructorCollection[type] = constructor;
	};

	_proto.getTokenType = function (token) {

		if (token.match(/^(y|m|w|d)$/)) {
			return TAG;
		}
		if (token.match(/^\:(n|l)/)) {
			return COLON;
		}

		if (token.match(/^\./)) {
			return DOT;
		}

		return false;
	};

	_proto.instantiate = function (token) {
		var tokenType = this.getTokenType(token);
		var tokenInstance = new this.tokenConstructorCollection[tokenType]();
		tokenInstance.init(token, tokenType);
		return tokenInstance;
	};

	return TokenFactory;
})();