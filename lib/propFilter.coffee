_ = require 'underscore'
module.exports = ->
    obj = {}

    obj.hasProp = (item, prop) ->
        _.some item.props, (p)-> p is prop
    obj