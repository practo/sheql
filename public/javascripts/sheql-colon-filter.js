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

	_proto.getFilterType = function (token) {
		if (token === '.leap') {
			return 'yearType';
		}
		if (_.contains(monthName, token)) {
			return 'monthName';
		}

		if (_.contains(monthSize, token)) {
			return 'monthSize';
		}

		if (_.contains(weekdayName, token)) {
			return 'weekdayName';
		}

		if (token.match(/^\.[0-3][0-9]$/)) {
			return 'dateNumber';
		}
	};

	_proto.filter = function (selectedRange) {
		var filterType = this.getFilterType(this.token);
		var tokenValue = this.getTokenValue(this.token);
		switch (filterType) {
		case 'yearType':
			if (tokenValue === 'leap') {
				return selectedRange.getLeapYears(tokenValue);
			}
			break;
		case 'monthName':
			return selectedRange.getMonthByName(tokenValue);

		case 'monthSize':
			return selectedRange.getMonthBySize(tokenValue);

		case 'weekdayName':
			return selectedRange.getDayByName(tokenValue);

		case 'dateNumber':
			return selectedRange.getDayByDateNumber(tokenValue);
		}

		return selectedRange;
	};

	return ColonFilter;
})();