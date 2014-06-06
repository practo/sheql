describe('DotFilter', function () {
	var parser;
	beforeEach(function () {
		dot = new DotFilter();
	});

	it('should exist', function () {
		should.exist(dot);
	});

	describe('getFilterType(token)', function () {
		it('should return yearType', function () {
			dot.getFilterType('.leap').should.equal('yearType');
		});

		it('should return monthName', function () {
			dot.getFilterType('.oct').should.equal('monthName');
		});

		it('should return monthSize', function () {
			dot.getFilterType('.29d').should.equal('monthSize');
		});

		it('should return dateNumber', function () {
			dot.getFilterType('.29').should.equal('dateNumber');
		});
	});

});