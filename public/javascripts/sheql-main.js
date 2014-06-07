var Main = (function () {
	function Main() {}
	var _proto = Main.prototype;
	_proto._buildDateRangeCollection = function (_startDate, _endDate) {
		var dateCollection = [];
		var startDate = moment(_startDate, 'YYYY-MM-DD');
		var endDate = moment(_endDate, 'YYYY-MM-DD');
		var iter = moment(startDate).twix(endDate).iterate("days");
		while (iter.hasNext()) {
			dateCollection.push(iter.next().toDate());
		}
		return dateCollection;
	};
	return Main;
})();