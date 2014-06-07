describe('TreeBuilder', function () {
	var parser;
	beforeEach(function () {
		tb = new TreeBuilder();
	});

	describe('weekDateCollectionBuilder()', function () {
		it('should exist', function () {
			should.exist(tb.weekDateCollectionBuilder);
		});

		it('should create week collection for absolutes', function () {
			var d1 = new Date(2012, 11, 31);
			var d2 = new Date(2013, 0, 1);
			var d3 = new Date(2013, 0, 2);
			tb.weekDateCollectionBuilder([d1, d2, d3])
				.should.eql([{
					dates: [d1, d2, d3],
					props: [],
					indices: {
						a: 0
					}
				}]);
		});

		it('should create week collection of years', function () {
			var d1 = new Date(2012, 11, 31);
			var d2 = new Date(2013, 0, 1);
			var d3 = new Date(2013, 0, 2);
			tb.weekDateCollectionBuilder(
				[{
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
				}], 'y')
				.should.eql([{
					dates: [d1],
					props: [],
					indices: {
						y: 0,
						ay: 53
					}
				}, {
					dates: [d2, d3],
					props: [],
					indices: {
						y: 0,
						ay: 1
					}
				}]);
		});
		it('should create week collection of months', function () {
			var d1 = new Date(2012, 11, 31);
			var d2 = new Date(2013, 0, 1);
			var d3 = new Date(2013, 0, 2);
			tb.weekDateCollectionBuilder(
				[{
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
				}], 'm')
				.should.eql([{
					dates: [d1],
					props: [],
					indices: {
						m: 0,
						am: 6
					}
				}, {
					dates: [d2, d3],
					props: [],
					indices: {
						m: 0,
						am: 1
					}
				}]);
		});
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

		it('should create collection for false', function () {
			var d1 = new Date(2012, 11, 31);
			var d2 = new Date(2013, 0, 1);
			var d3 = new Date(2013, 0, 2);
			tb.monthDateCollectionBuilder([{
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
			}])
				.should.eql([{
					dates: [d1],
					props: ['.dec', '.31d'],
					indices: {
						a: 0,
						y: 0
					}
				}, {
					dates: [d2, d3],
					props: ['.jan', '.31d'],
					indices: {
						a: 1,
						y: 0
					}
				}]);
		});

		it('should create collection', function () {
			var d1 = new Date(2012, 11, 31);
			var d2 = new Date(2013, 0, 1);
			var d3 = new Date(2013, 0, 2);
			tb.monthDateCollectionBuilder([d1, d2, d3], true)
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