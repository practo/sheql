describe('Main', function () {
	var main, lxr, tree;
	beforeEach(function () {
		main = new Main();
		lxr = new Lexer();
		tree = new TreeBuilder();
		main._init(lxr, tree);
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
	describe('_colonType(token)', function () {
		it('should return n', function () {
			main._colonType(':n[2x+4]').should.equal('n');
		});

		it('should return l', function () {
			main._colonType(':l[-2x+4]').should.equal('l');
		});
	});

	describe('_colonX0(token)', function () {
		it('should return 0', function () {
			main._colonX0(':n[x]').should.equal('0');
		});

		it('should return 1', function () {
			main._colonX0(':n[x+1]').should.equal('1');
		});

		it('should return 25', function () {
			main._colonX0(':n[x+25]').should.equal('25');
		});
		it('should return 35', function () {
			main._colonX0(':n[35]').should.equal('35');
		});

	});

	describe('_colonX1(token)', function () {
		it('should return 1', function () {
			main._colonX1(':n[x]').should.equal('1');
		});

		it('should return 2', function () {
			main._colonX1(':n[2x]').should.equal('2');
		});

		it('should return 25', function () {
			main._colonX1(':n[25x]').should.equal('25');
		});

		it('should return 0', function () {
			main._colonX1(':n[25]').should.equal('0');
		});
	});

	describe('_colonValue(token)', function () {

		it('should return for lth values', function () {
			main._colonValue(':l[2x+1]').should.eql({
				type: 'l',
				x0: 1,
				x1: 2
			});
		});

		it('should return for lth with not x0', function () {
			main._colonValue(':l[2x]').should.eql({
				type: 'l',
				x0: 0,
				x1: 2
			});
		});

		it('should return for lth with no x1', function () {
			main._colonValue(':l[2]').should.eql({
				type: 'l',
				x0: 2,
				x1: 0
			});
		});
	});
});