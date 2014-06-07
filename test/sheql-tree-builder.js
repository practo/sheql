describe('TreeBuilder', function () {
	var parser;
	beforeEach(function () {
		tb = new TreeBuilder();
	});

	describe('yearDateCollectionBuilder()', function () {
		it('should exist', function () {
			should.exist(tb.yearDateCollectionBuilder);
		});

		it('should create collection', function () {
			var d1 = new Date(2012, 11, 31);
			var d2 = new Date(2013, 0, 1);
			var d3 = new Date(2013, 0, 2);
			tb.yearDateCollectionBuilder([d1, d2, d3])
				.should.eql([{
					dates: [d1],
					props: ['.leap'],
					indices: {
						a: 0
					}
				}, {
					dates: [d2, d3],
					props: [],
					indices: {
						a: 1
					}
				}]);
		});
	});

	describe('monthDateCollectionBuilder()', function () {
		it('should exist', function () {
			should.exist(tb.monthDateCollectionBuilder);
		});

		it('should create collection', function () {
			var d1 = new Date(2012, 11, 31);
			var d2 = new Date(2013, 0, 1);
			var d3 = new Date(2013, 0, 2);
			tb.monthDateCollectionBuilder([d1, d2, d3])
				.should.eql([{
					dates: [d1],
					props: ['.dec', '.31d'],
					indices: {
						a: 0
					}
				}, {
					dates: [d2, d3],
					props: ['.jan', '.31d'],
					indices: {
						a: 1
					}
				}]);
		});
	});

});