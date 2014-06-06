describe('SelectedRange', function () {
	var parser;
	beforeEach(function () {
		sr = new SelectedRange();
	});

	it('should exist', function () {
		should.exist(sr);
	});

	it('momentjs should be loaded', function () {
		should.exist(moment);
	});

	// describe('getMonths()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getMonths);
	// 	});
	// });

	describe('init(startDate, endDate)', function () {
		it('should exist', function () {
			should.exist(sr.init);
		});
	});
	describe('getYears()', function () {
		it('should exist', function () {
			should.exist(sr.getYears);
		});
	});

	// describe('getWeeks()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getWeeks);
	// 	});
	// });
	// describe('getDays()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getDays);
	// 	});
	// });

	// describe('getLeapYears()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getLeapYears);
	// 	});
	// });
	// describe('getMonthByName()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getMonthByName);
	// 	});
	// });
	// describe('getMonthBySize()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getMonthBySize);
	// 	});
	// });
	// describe('getDayByName()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getDayByName);
	// 	});
	// });
	// describe('getDayByDateNumber()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getDayByDateNumber);
	// 	});
	// });

	// describe('getEveryNth()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getEveryNth);
	// 	});

	// });
	// describe('getEveryNthFromLast()', function () {
	// 	it('should exist', function () {
	// 		should.exist(sr.getEveryNthFromLast);
	// 	});

	// });

});