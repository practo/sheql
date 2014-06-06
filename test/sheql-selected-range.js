describe('SelectedRange', function () {
	var parser;
	beforeEach(function () {
		sr = new SelectedRange();
	});

	it('should exist', function () {
		should.exist(sr);
	});

	it('momentjs should be loaded', function () {
		should.exist(moment);
	});

});