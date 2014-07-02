utils = require './utils'
module.exports = ->
    _proto = {}

    _proto._splitOnTokens = (str) ->
        utils.filterItems str.split(/( |:|\.|\!)/), (i) ->
            i isnt " " and i isnt ""


    _proto._x0Extractor = (str) ->
        x0 = undefined
        x0 = str.replace(/\]/, "").replace(/.*\[/, "").replace(/.*x/, "")
        x0 = (if x0 is "" then 0 else x0)
        parseInt x0, 10

    _proto._x1Extractor = (str) ->
        x1 = 0
        if str.match("x")
            x1 = str.replace(/x.*/, "").replace(/.*\[/, "")
            if x1 is ""
                x1 = 1
            else if x1 is "-"
                x1 = -1
            else
                x1 = parseInt(x1, 10)
        else
            x1 = 0
        x1

    _proto._parseColonFilters = (str) ->
        filter = {}
        filter.from = str[0]
        filter.x0 = @_x0Extractor(str)
        filter.x1 = @_x1Extractor(str)
        filter

    _proto._ast = (tokenCollection) ->
        tree = {}
        tokenType = undefined
        lastBaseToken = undefined
        filterOn = undefined
        for token in tokenCollection
            if token.match(/^(y|m|w|d)$/)
                tree[token] = []
                lastBaseToken = token
            else if token.match(/(:|\.|\!)/)
                tokenType = token
            else
                if tokenType is ":"
                    filterOn = @_parseColonFilters(token)
                else
                    filterOn = token

                tree[lastBaseToken].push
                    filterType: tokenType
                    filterOn: filterOn

        tree

    _proto.parser = (str) ->
        tokenCollection = @_splitOnTokens(str)
        @_ast tokenCollection

    _proto