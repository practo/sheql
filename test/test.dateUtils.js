var should = require('should');

describe('DateUtils', function () {
	var dt, DateUtils;

	beforeEach(function () {
		dt = new DateUtils();
	});

	before(function () {
		DateUtils = require('../src/dateUtils');
	});

	after(function () {
		delete require.cache[require.resolve('../src/dateUtils')];
	});

});