var ColonFilter = (function () {

	function ColonFilter() {}
	var _proto = ColonFilter.prototype;

	_proto.init = function (token) {
		this.token = token;
	};

	_proto.getX0 = function (token) {
		return token
			.replace(/\:(n|l)/, '')
			.replace(/\[.*x/, '')
			.replace(/\]/, '')
			.replace('+', '');
	};

	_proto.getType = function (token) {
		return token.replace(/\:/, '').replace(/\[.*/, '');
	};

	_proto.getTokenValue = function (token) {

		var type = token
			.replace(/\:/, '')
			.replace(/\[.*\]/, '');

		var x0 = parseInt(token
			.replace('.*[', '')
			.replace(/.*(\+|\-)/, ''), 10);

		if (isNaN(x0)) {
			x0 = 0;
		}

		var x1 = token
			.replace(/.*\[/, '')
			.replace(/x.*/, '');

		// if (isNaN(x0)) {
		// 	x1 = 0;
		// }

		return {
			type: type,
			x0: x0,
			x1: x1

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