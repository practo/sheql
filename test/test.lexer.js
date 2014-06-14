var should = require('should');

describe('Lexer', function () {
	var lxr, Lexer;

	beforeEach(function () {
		lxr = new Lexer();
	});

	before(function () {
		delete require.cache[require.resolve('../lib/Lexer')];
		Lexer = require('../lib/Lexer');
	});

	describe('_splitOnTokens()', function () {

		it('should exist', function () {
			should.exist(lxr._splitOnTokens);
		});

		it('should split on string', function () {
			lxr._splitOnTokens('y m d').should.eql(['y', 'm', 'd']);
		});

		it('should ignore multi spaces', function () {
			lxr._splitOnTokens('y m   d').should.eql(['y', 'm', 'd']);
		});

		it('should split on colons', function () {
			lxr._splitOnTokens('y m:n[2x+4] d').should.eql(['y', 'm', ':', 'n[2x+4]', 'd']);
		});

		it('should split on dots', function () {
			lxr._splitOnTokens('y m.sat d').should.eql(['y', 'm', '.', 'sat', 'd']);
		});

		it('should split on exclamation', function () {
			lxr._splitOnTokens('y m!sat d').should.eql(['y', 'm', '!', 'sat', 'd']);
		});

		it('should split on all', function () {
			lxr._splitOnTokens('y.sat:n[x+3]:l[2] m!sat d').should.eql(['y',
				'.', 'sat', ':', 'n[x+3]', ':', 'l[2]', 'm', '!', 'sat', 'd'
			]);
		});

	});

	describe('parser()', function () {

		it('should have parse', function () {
			should.exist(lxr.parser);
		});

	});

});