var SelectedRange = (function () {

	function SelectedRange() {
		this._result = {};
		this._hasStarted = false;
	}
	var _proto = SelectedRange.prototype;

	_proto.getYears = function () {
		if (this._hasStarted === false) {

		}
		return this;
	};

	_proto.init = function (startDate, endDate) {
		this._result.startDate = startDate;
		this._result.endDate = endDate;
	};
	return SelectedRange;
})();