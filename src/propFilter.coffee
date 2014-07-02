utils = require './utils'
module.exports = ->
    obj = {}

    obj.notHaveProp = (itemCollection, filterOn) ->
        utils.filterItems itemCollection, (item) -> item.props.indexOf(filterOn) is -1

    obj.hasProp = (itemCollection, filterOn) ->
        utils.filterItems itemCollection, (item) ->
            item.props.indexOf(filterOn) > -1

    obj