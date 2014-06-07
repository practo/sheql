describe('Main', function () {
	var main, lxr;
	beforeEach(function () {
		main = new Main();
		lxr = new Lexer();
		main._init(lxr);
	});

	it('expectation', function () {
		//EMPTY TEST
	});

	describe('buildDateRangeCollection()', function () {
		it('should return an array of dates', function () {
			main._buildDateRangeCollection('2013-1-10', '2014-1-10')
				.length.should.equal(366);
		});

		it('should return an instance of date', function () {
			main._buildDateRangeCollection('2013-1-10', '2013-1-11')[0]
				.should.be.an.instanceof(Date);
		});
	});

	describe('_getTokens()', function () {

	});

});