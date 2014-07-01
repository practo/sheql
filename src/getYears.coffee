Days = require('./getDays.coffee')()
Weeks = require('./getWeeks.coffee')()
module.exports = ->
    obj = {}
    getStartDate = (startDate, year) ->
        tmpStartDate = new Date year, 0, 1
        if tmpStartDate.valueOf() < startDate.valueOf()
            tmpStartDate = startDate
        tmpStartDate

    getEndDate = (endDate, year) ->
        tmpEndDate = new Date year, 11, 31
        if tmpEndDate.valueOf() > endDate.valueOf()
            tmpEndDate = endDate
        tmpEndDate


    propCollection = (startDate, endDate) ->
        year = startDate.getFullYear()
        weekCount = "#{Weeks.weekCount startDate, endDate}w"
        isLeap = obj.isLeapYear year
        dayCount = if isLeap is true then '366d' else '365d'
        [dayCount, weekCount, year.toString()]


    obj.isLeapYear = (year) ->
        d = new Date year, 2, 0
        if d.getDate() is 29 then true else false


    obj.getCollection = (startDate, endDate) ->
        years = []
        count = endDate.getFullYear() - startDate.getFullYear()
        currentYear = startDate.getFullYear()

        for i in [0..count]
            yStartDate = getStartDate startDate, currentYear
            yEndDate = getEndDate endDate, currentYear

            years.push
                type: 'year'
                props: propCollection yStartDate, yEndDate
                startDate : yStartDate
                endDate : yEndDate
            currentYear++

        years


    obj