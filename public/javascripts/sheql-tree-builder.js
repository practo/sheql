var TreeBuilder = (function () {

	function TreeBuilder() {}

	var _proto = TreeBuilder.prototype;

	_proto.monthDateCollectionBuilder = function (dateCollection) {
		if (!_.isArray(dateCollection)) {
			return;
		}

		var grpDateCollection = _.groupBy(dateCollection, function (d) {
			return d.getMonth() + '-' + d.getFullYear();
		});
		var index = 0;
		var result = [];
		_.each(grpDateCollection, function (d) {
			monthProps = ['.' + d[0].getMonthName(), '.' + d[0].daysInMonth() + 'd'];
			result.push({
				dates: d,
				props: monthProps,
				indices: {
					a: index++
				}
			});
		});

		return result;
	};

	_proto.yearDateCollectionBuilder = function (dateCollection) {
		var grpDateCollection = _.groupBy(dateCollection, function (d) {
			return d.getFullYear();
		});
		var index = 0;
		var result = [];
		_.each(grpDateCollection, function (d) {
			isLeapYear = d[0].isLeapYear();
			result.push({
				dates: d,
				props: isLeapYear ? ['.leap'] : [],
				indices: {
					a: index++
				}
			});
		});

		return result;
	};

	// _proto.groupByMonth = function (dateCollection) {
	// 	return _.groupBy(dateCollection, function (d) {
	// 		return d.getMonth();
	// 	});
	// };

	// _proto.groupByYear = function (dateCollection) {
	// 	return _.groupBy(dateCollection, function (d) {
	// 		return d.getFullYear();
	// 	});
	// };

	// _proto.groupByWeek = function (dateCollection) {
	// 	return _.groupBy(dateCollection, function (d) {
	// 		return d.getWeek();
	// 	});
	// };
	return TreeBuilder;

})();