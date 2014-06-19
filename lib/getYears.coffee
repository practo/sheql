module.exports = ->
    obj = {}

    #Should return a count only
    obj.fetch = (startDate, endDate) ->
        endDate.getFullYear() - startDate.getFullYear()

    obj
