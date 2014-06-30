Days = require('./getDays')()
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


    propCollection = (year) ->
        isLeap = obj.isLeapYear year
        dayCount = if isLeap is true then '366d' else '365d'
        [dayCount]


    obj.isLeapYear = (year) ->
        d = new Date year, 2, 0
        if d.getDate() is 29 then true else false


    obj.getCollection = (startDate, endDate) ->
        years = []
        count = endDate.getFullYear() - startDate.getFullYear()
        currentYear = startDate.getFullYear()
        yStartDate = new Date startDate.getFullYear(), 0, 1
        yEndDate = new Date endDate.getFullYear(), 11, 31

        for i in [0..count]

            years.push
                type: 'year'
                props: propCollection currentYear
                startDate : getStartDate startDate, currentYear
                endDate : getEndDate endDate, currentYear
            currentYear++

        years


    obj