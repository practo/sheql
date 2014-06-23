_ = require 'underscore'
lexer = require('./lexer')()
propfilter = require('./propFilter')()
indexfilter = require('./indexFilter')()
getdays = require('./getDays')()
getweeks = require('./getWeeks')()
getmonths = require('./getMonths')()
getyears = require('./getYears')()

module.exports = ->
    sheql = {}
    sheql.filterCollection = (collection, props) ->
        _.filter collection, (i) -> _.difference(i.props, props).length is 0

    sheql.executor = (str, startDate, endDate)->
        ast = lexer.parser str
        itemCollection = []

        if ast.y
            yearCollection = getYears.yearCollection startDate, endDate
            #Gets a list of filtered years
            yearCollection = @filterCollection yearCollection, ast.y

        if ast.m
            monthCollection =[]
            _.each itemCollection, (item)->
                itemCollection = getYears.monthCollection


    sheql