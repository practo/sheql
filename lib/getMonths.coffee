module.exports = ->
    obj = {}

    obj.monthCollectionByYear = (year) ->
        startDate = new Date year, 0, 1
        endDate = new Date year, 11, 31
        @monthCollection startDate, endDate

    #Should return a count only
    obj.monthCollection = (startDate, endDate) ->

    obj