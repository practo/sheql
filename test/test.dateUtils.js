var should = require('should');

describe('DateUtils', function () {
	var dt, DateUtils;

	beforeEach(function () {
		dt = new DateUtils();
	});

	before(function () {
		delete require.cache[require.resolve('../lib/dateUtils')];
		DateUtils = require('../lib/dateUtils');
	});

});