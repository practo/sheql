lexer = require('./lexer')()
propfilter = require('./propFilter')()
indexfilter = require('./indexFilter')()
getdays = require('./getDays')()
getweeks = require('./getWeeks')()
getmonths = require('./getMonths')()
getyears = require('./getYears')()

module.exports = ->
    sheql = {}
    sheql.executor = (str, startDate, endDate)->
        ast = lexer.parser str
        itemCollection = []

        if ast.y
            itemCollection = getYears.yearCollection

    sheql