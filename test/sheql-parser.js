describe('SHEQL', function () {
	var parser;
	beforeEach(function () {
		sql = new Sheql();
	});

	it('should exist', function () {
		should.exist(sql);
	});

	describe('tokenizer()', function () {
		it('should exist', function () {
			should.exist(sql.tokenizer);
		});

		it('should return tokens', function () {
			sql.tokenizer('y m d').should.eql(['y', 'm', 'd']);
		});
	});
});