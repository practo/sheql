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

	describe('_ast()', function () {

		it('should exist', function () {
			should.exist(lxr._ast);
		});

		it('should attach core type', function () {
			lxr._ast(['y', 'm', 'd']).should.eql({
				y: [],
				m: [],
				d: []
			});
		});

		it('should attach filters', function () {
			lxr._ast(['y', '!', 'leap', 'm', ':', 'n[x+1]', 'd', '.', 'sat', '.', '21']).should.eql({
				y: [{
					filterType: '!',
					filterOn: 'leap'
				}],
				m: [{
					filterType: ':',
					filterOn: 'n[x+1]'
				}],
				d: [{
					filterType: '.',
					filterOn: 'sat'
				}, {
					filterType: '.',
					filterOn: '21'
				}]
			});
		});

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
			lxr._splitOnTokens('y.sat:n[x+3]:l[2] m!sat d').should.eql([
				'y', '.', 'sat', ':', 'n[x+3]', ':', 'l[2]', 'm', '!', 'sat', 'd'
			]);
		});

	});

	describe('_x1Extractor()', function () {
		it('should exist', function () {
			should.exist(lxr._x1Extractor);
		});

		it('should determine the type for n[x+1]', function () {
			lxr._x1Extractor('n[x+1]').should.equal(1);
		});

		it('should determine the type for n[2x+1]', function () {
			lxr._x1Extractor('n[2x+1]').should.equal(2);
		});

		it('should determine the type for n[2x]', function () {
			lxr._x1Extractor('n[2x]').should.equal(2);
		});

		it('should determine the type for n[2]', function () {
			lxr._x1Extractor('n[2]').should.equal(0);
		});

		it('should determine the type for n[-2]', function () {
			lxr._x1Extractor('n[-2]').should.equal(0);
		});

		it('should determine the type for n[-2x]', function () {
			lxr._x1Extractor('n[-2x]').should.equal(-2);
		});
	});

	describe('_x0Extractor()', function () {
		it('should exist', function () {
			should.exist(lxr._x0Extractor);
		});

		it('should determine the type for n[x+1]', function () {
			lxr._x0Extractor('n[x+1]').should.equal(1);
		});

		it('should determine the type for n[2x+1]', function () {
			lxr._x0Extractor('n[2x+1]').should.equal(1);
		});

		it('should determine the type for n[2x]', function () {
			lxr._x0Extractor('n[2x]').should.equal(0);
		});

		it('should determine the type for n[2]', function () {
			lxr._x0Extractor('n[2]').should.equal(2);
		});

		it('should determine the type for n[-2]', function () {
			lxr._x0Extractor('n[-2]').should.equal(-2);
		});

		it('should determine the type for n[-2x]', function () {
			lxr._x0Extractor('l[-2x]').should.equal(0);
		});
	});

	describe('_parseColonFilters()', function () {

		it('should exist', function () {
			should.exist(lxr._parseColonFilters);
		});

	});

	describe('parser()', function () {

		it('should have parse', function () {
			should.exist(lxr.parser);
		});

	});

});