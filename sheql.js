require('coffee-script');
exe = require('./lib/executor')();
module.exports = function (str) {
	exe.executor(str);
};