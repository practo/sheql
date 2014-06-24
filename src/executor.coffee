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

    sheql.getCollections = (ast, itemCollection, startDate, endDate, filterName)->
        tmpCollection =[]
        _cb = collectionBuilder[filterName]
        if ast[filterName]
            if itemCollection.length > 0
                _.each itemCollection, (item)->
                    arr.push.apply tmpCollection, _cb.getCollection item.startDate, item.endDate
            else
                tmpCollection = _cb.getCollection startDate, endDate

            #Apply Filters
            @filterCollection tmpCollection, ast[filterName]
        else
            # console.log 'returning the same for:', filterName
            itemCollection


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
        itemCollection = @getCollections ast, itemCollection, startDate, endDate, 'y'

        itemCollection = @getCollections ast, itemCollection, startDate, endDate, 'm'

        itemCollection = @getCollections ast, itemCollection, startDate, endDate, 'w'

        itemCollection = @getCollections ast, itemCollection, startDate, endDate, 'd'

        _.map itemCollection, (i) -> i.value

    sheql