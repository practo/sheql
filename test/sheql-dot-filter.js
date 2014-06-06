describe('DotFilter', function () {
	var parser;
	beforeEach(function () {
		dot = new DotFilter();
	});

	it('should exist', function () {
		should.exist(dot);
	});

	describe('getTokenValue(token)', function () {
		it('should return leap', function () {
			dot.getTokenValue('.leap').should.equal('leap');
		});

		it('should return monthname', function () {
			dot.getTokenValue('.jan').should.equal('jan');
		});

		it('should return monthSize', function () {
			dot.getTokenValue('.28d').should.equal(28);
		});

		it('should return weekdayName', function () {
			dot.getTokenValue('.tue').should.equal('tue');
		});
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

		it('should return weekdayName', function () {
			dot.getFilterType('.sat').should.equal('weekdayName');
		});

		it('should return dateNumber', function () {
			dot.getFilterType('.29').should.equal('dateNumber');
		});
	});

});