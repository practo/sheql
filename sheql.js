require('coffee-script');
exe = require('./lib/executor')();
module.exports.getDates = function (str) {
	exe.executor(str);
};