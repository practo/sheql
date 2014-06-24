_ = require 'underscore'
module.exports = ->
    obj = {}

    obj.notHaveProp = (itemCollection, filterOn) ->
        _.filter itemCollection, (item) -> item.props.indexOf(filterOn) is -1

    obj.hasProp = (itemCollection, filterOn) ->
        _.filter itemCollection, (item) ->
            item.props.indexOf(filterOn) > -1

    obj