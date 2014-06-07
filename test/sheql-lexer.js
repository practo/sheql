describe('Lexer', function () {
	var parser;
	beforeEach(function () {
		lxr = new Lexer();
	});

	it('should exist', function () {
		should.exist(lxr);
	});

	describe('tokenizerPart2(tokenCollection)', function () {
		it('should exist', function () {
			should.exist(lxr.tokenizerPart2);
		});

		it('should group tokens by tags', function () {
			lxr.tokenizerPart2('m.jan:n[2x] w:n[2] d.mon')
				.should.eql({
					m: ['.jan', ':n[2x]'],
					w: [':n[2]'],
					d: ['.mon']
				});
		});
	});

	describe('tokenizer', function () {
		it('should exist', function () {
			should.exist(lxr.tokenizer);
		});

		it('should tokenize completely', function () {
			lxr.tokenizer('m:n[2x].jan w:n[2] d.mon').should.eql([
				'm',
				':n[2x]',
				'.jan',
				'w',
				':n[2]',
				'd',
				'.mon'
			]);
		});

		it('should tokenize colon in end', function () {
			lxr.tokenizer('m.jan:n[2x] w:n[2] d.mon').should.eql([
				'm',
				'.jan',
				':n[2x]',
				'w',
				':n[2]',
				'd',
				'.mon'
			]);
		});
	});
});