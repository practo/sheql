_ = require 'underscore'
module.exports = ->
    obj = {}

    obj.lthElement = (itemCollection, x1, x0) ->
        itemCollection = itemCollection.reverse()
        @nthElement itemCollection, x1, x0
        .reverse()

    obj.nthElement = (itemCollection, x1, x0) ->

        #index starts from 0, implementation wise
        x0--
        filteredCollection = []
        totalElements = itemCollection.length

        #x1 is not there
        if x1 is 0 and x0 < totalElements and x0 >= 0
            filteredCollection.push itemCollection[x0]
        else
            for x in [0...totalElements]
                index = (x0) + x1 * x
                if index >= 0 and index < totalElements
                    filteredCollection.push itemCollection[index]
        if x1 < 0
            filteredCollection = filteredCollection.reverse()

        filteredCollection

    obj