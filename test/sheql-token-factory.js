describe('TokenFactory', function () {
	var parser;
	beforeEach(function () {
		fac = new TokenFactory();
	});

	it('should exist', function () {
		should.exist(fac);
	});

	describe('register(type, constructor)', function () {

	});

	describe('instantiate(token)', function () {

	});

	describe('getTokenType(token)', function () {
		it('should return tag', function () {
			fac.getTokenType('y').should.equal('tag');
		});

		it('should return colon', function () {
			fac.getTokenType(':n[2x+1]').should.equal('colon');
		});

		it('should return dot', function () {
			fac.getTokenType('.sat').should.equal('dot');
		});

		it('should fail', function () {
			fac.getTokenType('my').should.be.false;
		});
	});

});