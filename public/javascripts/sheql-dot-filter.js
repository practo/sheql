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

		if (token.match(/^\.[0-3][0-9]$/)) {
			return 'dateNumber';
		}
	};

	_proto.filter = function (selectedRange) {
		var filterType = this.getFilterType(this.token);
		switch (filterType) {
		case 'yearType':
			selectedRange.getYears();
			break;
		}
	};

	return DotFilter;
})();