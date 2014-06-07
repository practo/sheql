describe('Lexer', function () {
	var parser;
	beforeEach(function () {
		lxr = new Lexer();
	});

	it('should exist', function () {
		should.exist(lxr);
	});

	describe('extractTokens(tokenCollection)', function () {
		it('should exist', function () {
			should.exist(lxr.extractTokens);
		});

		it('should group tokens by tags', function () {
			lxr.extractTokens('m.jan:n[2x] w:n[2] d.mon')
				.should.eql({
					m: ['.jan', ':n[2x]'],
					w: [':n[2]'],
					d: ['.mon']
				});
		});
	});

	describe('_SplitTokens', function () {
		it('should exist', function () {
			should.exist(lxr._SplitTokens);
		});

		it('should tokenize completely', function () {
			lxr._SplitTokens('m:n[2x].jan w:n[2] d.mon').should.eql([
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
			lxr._SplitTokens('m.jan:n[2x] w:n[2] d.mon').should.eql([
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