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

	describe('getMonths()', function () {
		beforeEach(function () {
			sr.init('2001-01-01', '2002-01-01');
		});

		it('should exist', function () {
			should.exist(sr.getMonths);
		});

		it('should add 13 getMonths', function () {
			sr.getMonths()._result.length.should.equal(13);
		});
	});

	describe('init(startDate, endDate)', function () {
		it('should exist', function () {
			should.exist(sr.init);
		});

	});
	describe('getYears()', function () {
		beforeEach(function () {
			sr.init('2001-01-01', '2005-01-01');
		});

		it('should exist', function () {
			should.exist(sr.getYears);
		});

		it('should add 5 years', function () {
			sr.getYears();
			sr._result.length.should.equal(5);
		});

		it('should add type as years', function () {
			sr.getYears();
			sr._result[0].type.should.equal('years');
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