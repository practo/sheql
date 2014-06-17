var should = require('should');

describe('DateUtils', function () {
	var dt, DateUtils;

	beforeEach(function () {
		dt = new DateUtils();
	});

	before(function () {
		DateUtils = require('../lib/dateUtils');
	});

	after(function () {
		delete require.cache[require.resolve('../lib/dateUtils')];
	});

});