Months = require('./getMonths')()
module.exports = ->
    obj = {}

    nextDate = (date) ->
        date = new Date date.getFullYear(), date.getMonth(), date.getDate()
        date.setDate date.getDate()+1
        date

    obj.weekCollectionForMonth = (year, month) ->
        size = Months.monthSize year, month
        startDate = new Date year, month, 1
        endDate = new Date year, month, size
        @weekCollection startDate, endDate

    obj.weekCollectionForYear = (year) ->
        startDate = new Date year, 0, 1
        endDate = new Date year, 11, 31
        @weekCollection startDate, endDate


    obj.weekCollection = (startDate, endDate) ->
        count = @weekCount startDate, endDate
        (value:i, type: 'week', props: [] for i in [0...count])

    obj.weekCount = (startDate, endDate) ->
        count = 0
        date = startDate
        firstDay = startDate.getDay()

        while date.valueOf() <= endDate.valueOf()
            count++ if date.getDay() is 0
            date = nextDate date

        if startDate.getDay() is 0 then count else count + 1

    obj