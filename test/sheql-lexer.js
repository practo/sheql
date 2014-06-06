describe('Lexer', function () {
	var parser;
	beforeEach(function () {
		lxr = new Lexer();
	});

	it('should exist', function () {
		should.exist(lxr);
	});

	describe('space_tokenizer()', function () {
		it('should exist', function () {
			should.exist(lxr.space_tokenizer);
		});

		it('should return tokens', function () {
			lxr.space_tokenizer('y m d').should.eql(['y', 'm', 'd']);
		});
	});

	describe('dot_tokenizer()', function () {
		it('should exist', function () {
			should.exist(lxr.dot_tokenizer);
		});

		it('should return tokens on . operator', function () {
			lxr.dot_tokenizer('d.sat').should.eql(['d', '.sat']);
		});

		it('should return tokens on multiple . operator', function () {
			lxr.dot_tokenizer('d.sat.21').should.eql(['d', '.sat', '.21']);
		});
	});

	describe('colon_tokenizer()', function () {
		it('should exist', function () {
			should.exist(lxr.colon_tokenizer);
		});

		it('should return tokens on . operator', function () {
			lxr.colon_tokenizer('d:n[100]').should.eql(['d', ':n[100]']);
		});

		it('should return tokens on multi : operator', function () {
			lxr.colon_tokenizer('d:n[100]:n[2n]').should.eql(['d', ':n[100]', ':n[2n]']);
		});
	});
});