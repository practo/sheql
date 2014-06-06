var ColonFilter = (function () {

	function ColonFilter() {}
	var _proto = ColonFilter.prototype;

	_proto.init = function (token) {
		this.token = token;
	};

	_proto.getX1 = function (token) {
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

	_proto.getX0 = function (token) {
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

	_proto.getType = function (token) {
		return token.replace(/\:/, '').replace(/\[.*/, '');
	};

	_proto.getTokenValue = function (token) {

		return {
			type: this.getType(token),
			x0: parseInt(this.getX0(token), 10),
			x1: parseInt(this.getX1(token), 10)

		};
	};

	_proto.filter = function (selectedRange) {
		var tokenValue = this.getTokenValue(this.token);
		if (tokenValue.type === 'n') {
			return selectedRange.getEveryNth(tokenValue.x0, tokenValue.x1);
		}
		if (tokenValue.type === 'l') {
			return selectedRange.getEveryNthFromLast(tokenValue.x0, tokenValue.x1);
		}
		return selectedRange;
	};

	return ColonFilter;
})();