_ = require 'underscore'
module.exports = ->
    obj = {}

    obj.hasProp = (itemCollection, prop) ->
        _.filter itemCollection, (item) ->
            _.some item.props, (p) ->
                p is prop

    obj