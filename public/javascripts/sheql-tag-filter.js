var TagFilter = (function () {
	function TagFilter() {

	}
	var _proto = TagFilter.prototype;

	_proto.init = function (token, tokenType) {
		this.token = token;
		this.tokenType = tokenType;
	};

	_proto.filter = function (selectedRange) {

		if (token === 'm') {
			return selectedRange.getMonths();
		}
		if (token === 'y') {
			return selectedRange.getYears();
		}

		if (token === 'w') {
			return selectedRange.getWeeks();
		}

		if (token === 'd') {
			return selectedRange.getDays();
		}

		return selectedRange;
	};

	return TagFilter;
})();