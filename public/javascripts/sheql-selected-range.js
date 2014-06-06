var SelectedRange = (function () {

	function SelectedRange() {
		this._result = [];
		this._hasStarted = false;
	}
	var _proto = SelectedRange.prototype;

	_proto.getYears = function () {
		var range, _this = this;

		range = moment()
			.range(this.startDate, this.endDate);
		range.by('years', function (moment) {

			_this._result.push({
				type: 'years',
				value: moment,
				children: []
			});
		});

		return this;
	};

	_proto.getMonths = function () {

		var _this = this,
			range = moment.range(this.startDate, this.endDate);

		range.by('months', function (moment) {
			_this._result.push({
				type: 'months',
				value: moment,
				children: []
			});
		});

		return this;
	};

	_proto.init = function (startDate, endDate) {

		this.startDate = moment(startDate, 'YYYY-MM-DD');
		this.endDate = moment(endDate, 'YYYY-MM-DD');
	};
	return SelectedRange;
})();