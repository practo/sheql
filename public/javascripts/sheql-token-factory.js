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

	_proto.instantiate = function (token) {};

	return TokenFactory;
})();