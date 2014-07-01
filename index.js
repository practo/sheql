var exe = require('./src/executor.coffee')();
module.exports.getDates = function (str, startDate, endDate, startOfWeek) {
    return exe.executor(str, startDate, endDate, startOfWeek);
};