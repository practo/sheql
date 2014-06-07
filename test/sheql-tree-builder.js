describe('TreeBuilder', function () {
	var parser;
	beforeEach(function () {
		tb = new TreeBuilder();
	});

	describe('groupByYear()', function () {
		it('should exist()', function () {
			should.exist(tb.groupByYear);
		});

		it('should group by year', function () {
			var d1 = new Date(2010, 1, 1);
			var d2 = new Date(2012, 1, 1);
			var d3 = new Date(2010, 1, 1);
			tb.groupByYear([d1, d2, d3])['2010'].length.should.equal(2);
			tb.groupByYear([d1, d2, d3])['2012'].length.should.equal(1);
		});
	});

	describe('groupByMonth()', function () {
		it('should exist()', function () {
			should.exist(tb.groupByMonth);
		});

		it('should group by year', function () {
			var d1 = new Date(2010, 1, 1);
			var d2 = new Date(2012, 2, 1);
			var d3 = new Date(2010, 1, 1);
			tb.groupByMonth([d1, d2, d3])['1'].length.should.equal(2);
			tb.groupByMonth([d1, d2, d3])['2'].length.should.equal(1);
		});
	});

	describe('groupByWeek()', function () {
		it('should exist', function () {
			should.exist(tb.groupByWeek);
		});

		// it('should group by week', function () {
		// 	tb.groupByWeek([new Date(2011, 9, 10)])
		// 		.lenght.should.equal(2);
		// });
	});

});