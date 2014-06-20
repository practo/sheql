module.exports = ->
    obj = {}

    obj.monthCollectionByYear = (year) ->
        startDate = new Date year, 0, 1
        endDate = new Date year, 11, 31
        @monthCollection startDate, endDate

    #Should return a count only
    obj.monthCollection = (startDate, endDate) ->
        #Adding 12 months in a year
        months = (endDate.getFullYear() - startDate.getFullYear() + 1) * 12

        #Adding 12 months in a year
        months -= startDate.getMonth()
        months -= 12 - endDate.getMonth() - 1
        months

    obj