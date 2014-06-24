_ = require 'underscore'
lexer = require('./lexer')()
propfilter = require('./propFilter')()
indexfilter = require('./indexFilter')()

collectionBuilder =
    d : require('./getDays')()
    w : require('./getWeeks')()
    m : require('./getMonths')()
    y : require('./getYears')()

module.exports = ->
    arr = []
    sheql = {}
    sheql.filterCollection = (collection, filterProps) ->
        _.each filterProps, (prop) ->

            if prop.filterType is '.'
                collection = propfilter.hasProp collection, prop.filterOn

            else if prop.filterType is '!'
                collection = propfilter.notHaveProp collection, prop.filterOn

            else if prop.filterType is ':' and prop.filterOn.from is 'n'
                collection = indexfilter.nthElement collection, prop.filterOn.x1, prop.filterOn.x0

            else if prop.filterType is ':' and prop.filterOn.from is 'l'
                collection = indexfilter.lthElement collection, prop.filterOn.x1, prop.filterOn.x0

        collection


    sheql.executor = (str, startDate, endDate)->
        ast = lexer.parser str

        itemCollection = []

        if ast.y
            itemCollection = collectionBuilder.y.getCollection startDate, endDate
            itemCollection = @filterCollection itemCollection, ast.y


        if ast.m
            if itemCollection.length > 0
                tmpCollection =[]
                _.each itemCollection, (item)->
                    arr.push.apply tmpCollection, collectionBuilder.m.getCollection item.startDate, item.endDate

                itemCollection = @filterCollection tmpCollection, ast.m
            else
                itemCollection = collectionBuilder.m.getCollection startDate, endDate


        if ast.w
            if itemCollection.length > 0
                tmpCollection =[]
                _.each itemCollection, (item)->
                    arr.push.apply tmpCollection, collectionBuilder.w.getCollection item.startDate, item.endDate

                itemCollection = @filterCollection tmpCollection, ast.w
            else
                itemCollection = collectionBuilder.w.getCollection startDate, endDate


        if ast.d
            if itemCollection.length > 0
                tmpCollection =[]
                _.each itemCollection, (item)->
                    arr.push.apply tmpCollection, collectionBuilder.d.getCollection item.startDate, item.endDate

                itemCollection = @filterCollection tmpCollection, ast.d
            else
                itemCollection = collectionBuilder.d.getCollection startDate, endDate



        _.map itemCollection, (i) -> i.value

    sheql