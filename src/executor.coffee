lexer = require('./lexer.coffee')()
propfilter = require('./propFilter.coffee')()
indexfilter = require('./indexFilter.coffee')()

collectionBuilder =
    d : require('./getDays.coffee')()
    w : require('./getWeeks.coffee')()
    m : require('./getMonths.coffee')()
    y : require('./getYears.coffee')()

module.exports = ->
    arr = []
    sheql = {}

    getCollections = (ast, itemCollection, startDate, endDate, filterName)->
        filteredCollection = []
        _cb = collectionBuilder[filterName]
        if ast[filterName]
            if itemCollection.length > 0
                for item in itemCollection
                    tmpCollection = _cb.getCollection item.startDate, item.endDate
                    arr.push.apply filteredCollection, sheql.filterCollection tmpCollection, ast[filterName]
            else
                tmpCollection = _cb.getCollection startDate, endDate
                filteredCollection = sheql.filterCollection tmpCollection, ast[filterName]
            [filteredCollection, filteredCollection.length is 0]
        else
            [itemCollection, false]


    sheql.filterCollection = (collection, filterProps) ->
        for prop in filterProps

            if prop.filterType is '.'
                collection = propfilter.hasProp collection, prop.filterOn

            else if prop.filterType is '!'
                collection = propfilter.notHaveProp collection, prop.filterOn

            else if prop.filterType is ':' and prop.filterOn.from is 'n'
                collection = indexfilter.nthElement collection, prop.filterOn.x1, prop.filterOn.x0

            else if prop.filterType is ':' and prop.filterOn.from is 'l'
                collection = indexfilter.lthElement collection, prop.filterOn.x1, prop.filterOn.x0

        collection


    sheql.executor = (str, startDate, endDate, startDay=0)->
        filterKeys = ['y', 'm', 'w', 'd']
        collectionBuilder.w.startDay = startDay
        ast = lexer.parser str
        itemCollection = []
        isEmptyCollection = false

        for i in filterKeys
            if isEmptyCollection is false
                [itemCollection, isEmptyCollection] =
                    getCollections ast, itemCollection, startDate, endDate, i
        return (i.value for i in itemCollection)

    sheql