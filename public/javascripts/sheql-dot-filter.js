var DotFilter = (function () {
	var yearType = ['.leap'];

	var monthName = [
		'.jan',
		'.feb',
		'.mar',
		'.apr',
		'.may',
		'.jun',
		'.jul',
		'.aug',
		'.sep',
		'.oct',
		'.nov',
		'.dec'
	];

	var monthSize = ['.28d', '.29d', '.30d', '.31d'];

	function DotFilter() {}
	var _proto = DotFilter.prototype;

	_proto.init = function (token) {
		this.token = token;
	};

	_proto.getFilterType = function (str) {
		if (str === '.leap') {
			return 'yearType';
		}
		if (_.contains(monthName, str)) {
			return 'monthName';
		}

		if (_.contains(monthSize, str)) {
			return 'monthSize';
		}

		if (str.match(/^\.[0-3][0-9]$/)) {
			return 'dateNumber';
		}
	};

	_proto.filter = function (selectedRange) {

	};

	return DotFilter;
})();