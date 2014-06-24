_ = require 'underscore'
lexer = require('./lexer')()
propfilter = require('./propFilter')()
indexfilter = require('./indexFilter')()
getdays = require('./getDays')()
getweeks = require('./getWeeks')()
getmonths = require('./getMonths')()
getyears = require('./getYears')()

module.exports = ->
    arr = []
    sheql = {}
    sheql.filterCollection = (collection, filterProps) ->
        _.each filterProps, (prop) ->

            if prop.filterType is '.'
                collection = propfilter.hasProp collection, prop.filterOn


            else if prop.filterType is '!'
                collection = propfilter.notHaveProp collection, prop.filterOn

            else if prop.filterType is ':' and prop.filterOn.from us 'n'
                collection = indexfilter.nthElement collection, prop.filterOn.x1, prop.filterOn.x0

            else if prop.filterType is ':' and prop.filterOn.from us 'l'
                collection = indexfilter.lthElement collection, prop.filterOn.x1, prop.filterOn.x0

        collection


    sheql.executor = (str, startDate, endDate)->
        # ast = lexer.parser str

        # itemCollection = []

        # if ast.y
        #     itemCollection = getYears.yearCollection startDate, endDate
        #     itemCollection = @filterCollection itemCollection, ast.y

        # if ast.m
        #     tmpCollection =[]
        #     if itemCollection.length > 0
        #     _.each itemCollection, (item)->
        #         arr.push.apply tmpCollection, getMonths.monthCollection item.startDate, item.endDate
        #     itemCollection = tmpCollection


    sheql