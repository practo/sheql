var exe = require('./lib/sheql.js');
module.exports.getDates = function (str, startDate, endDate, startOfWeek) {
    return exe.executor(str, startDate, endDate, startOfWeek);
};