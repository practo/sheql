var Lexer = require('../lib/Lexer');
var should = require('should');

describe('Lexer', function () {
	var lxr;
	beforeEach(function () {
		lxr = new Lexer();
	});

	describe('parse()', function () {
		it('should have parse', function () {
			should.exist(lxr.parse);
		});
	});

});