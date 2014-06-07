var TreeBuilder = (function () {

	function TreeBuilder() {}

	var _proto = TreeBuilder.prototype;

	_proto.groupByMonth = function (dateCollection) {
		return _.groupBy(dateCollection, function (d) {
			return d.getMonth();
		});
	};

	_proto.groupByYear = function (dateCollection) {
		return _.groupBy(dateCollection, function (d) {
			return d.getFullYear();
		});
	};

	// _proto.groupByWeek = function (dateCollection) {
	// 	return _.groupBy(dateCollection, function (d) {
	// 		return d.getWeek();
	// 	});
	// };
	return TreeBuilder;

})();