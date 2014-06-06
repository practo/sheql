describe('SHEQL', function () {
	var parser;
	beforeEach(function () {
		sql = new Sheql();
	});

	it('should exist', function () {
		should.exist(sql);
	});

	describe('space_tokenizer()', function () {
		it('should exist', function () {
			should.exist(sql.space_tokenizer);
		});

		it('should return tokens', function () {
			sql.space_tokenizer('y m d').should.eql(['y', 'm', 'd']);
		});
	});

	describe('dot_tokenizer()', function () {
		it('should exist', function () {
			should.exist(sql.dot_tokenizer);
		});

		it('should return tokens on . operator', function () {
			sql.dot_tokenizer('d.sat').should.eql(['d', '.sat']);
		});

		it('should return tokens on multiple . operator', function () {
			sql.dot_tokenizer('d.sat.21').should.eql(['d', '.sat', '.21']);
		});
	});

	describe('colon_tokenizer()', function () {
		it('should exist', function () {
			should.exist(sql.colon_tokenizer);
		});

		it('should return tokens on . operator', function () {
			sql.colon_tokenizer('d:n[100]').should.eql(['d', ':n[100]']);
		});

		it('should return tokens on multi : operator', function () {
			sql.colon_tokenizer('d:n[100]:n[2n]').should.eql(['d', ':n[100]', ':n[2n]']);
		});
	});
});