Date.prototype.getWeek = function () {
	var onejan = new Date(this.getFullYear(), 0, 1);
	return Math
		.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
};

var TreeBuilder = (function () {

	function TreeBuilder() {}

	var _proto = TreeBuilder.prototype;

	_proto.groupByYear = function (dateCollection) {
		return _.groupBy(dateCollection, function (d) {
			return d.getFullYear();
		});
	};

	_proto.groupByWeek = function (dateCollection) {
		return _.groupBy(dateCollection, function (d) {
			return d.getWeek();
		});
	};
	return TreeBuilder;

})();