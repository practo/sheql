var TreeBuilder = (function () {

	function TreeBuilder() {}

	var _proto = TreeBuilder.prototype;

	_proto.dateDateCollectionBuilder = function (dateCollection, isArray) {
		if (!isArray) {
			return _.pluck(dateCollection, 'dates');
		}
		return [dateCollection];
	};

	_proto.weekDateCollectionBuilder = function (dateCollection, parentTag) {
		var tmpCollection,
			yearIndex = 0,
			index = 0,
			grpDateCollection,
			result = [];

		if (!parentTag) {
			prevWeek = dateCollection[0].getWeekNumber();
			index = -1;
			tmpCollection = [];
			_.each(dateCollection, function (d) {
				tmpCollection.push(d);
				if (prevWeek != d.getWeekNumber()) {
					index++;
					result.push({
						dates: tmpCollection,
						props: [],
						indices: {
							a: index
						}
					});
					tmpCollection = [];
				}
			});
			if (tmpCollection.length > 0) {
				result.push({
					dates: tmpCollection,
					props: [],
					indices: {
						a: index + 1
					}
				});

			}
			return result;
		}
		if (parentTag === 'y') {
			tmpCollection = _.pluck(dateCollection, 'dates');
			_.each(tmpCollection, function (d) {
				yearIndex = 0;
				grpDateCollection = _.groupBy(d, function (dd) {
					return dd.getWeekOfYear();
				});
				_.each(grpDateCollection, function (dd, key) {
					result.push({
						dates: dd,
						props: [],
						indices: {
							y: yearIndex++,
							ay: parseInt(key, 10)
						}
					});
				});
			});
			return result;
		}
		if (parentTag === 'm') {
			tmpCollection = _.pluck(dateCollection, 'dates');
			_.each(tmpCollection, function (d) {
				monthIndex = 0;
				grpDateCollection = _.groupBy(d, function (dd) {
					return dd.getWeekOfMonth();
				});
				_.each(grpDateCollection, function (dd, key) {
					result.push({
						dates: dd,
						props: [],
						indices: {
							m: monthIndex++,
							am: parseInt(key, 10)
						}
					});
				});
			});
			return result;
		}
		return result;
	};

	_proto.monthDateCollectionBuilder = function (dateCollection, isArray) {
		var tmpCollection,
			yearIndex = 0,
			index = 0,
			grpDateCollection,
			result = [];

		if (!isArray) {
			tmpCollection = _.pluck(dateCollection, 'dates');
			_.each(tmpCollection, function (d) {
				yearIndex = 0;
				grpDateCollection = _.groupBy(d, function (dd) {
					return dd.getMonth() + '-' + dd.getFullYear();
				});
				_.each(grpDateCollection, function (dd) {
					monthProps = ['.' + dd[0].getMonthName(), '.' + dd[0].daysInMonth() + 'd'];
					result.push({
						dates: dd,
						props: monthProps,
						indices: {
							a: index++,
							y: yearIndex++
						}
					});
				});
			});
			return result;
		}

		grpDateCollection = _.groupBy(dateCollection, function (d) {
			return d.getMonth() + '-' + d.getFullYear();
		});

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

	return TreeBuilder;

})();