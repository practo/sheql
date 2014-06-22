Days = require('./getDays')()
module.exports = ->
    obj = {}


    obj.weekCollectionForMonth = (year, month) ->
        size = Days.dayCountForMonth year, month
        startDate = new Date year, month, 1
        endDate = new Date year, month, size
        @weekCollection startDate, endDate

    obj.weekCollectionForYear = (year) ->
        startDate = new Date year, 0, 1
        endDate = new Date year, 11, 31
        @weekCollection startDate, endDate


    obj.weekCollection = (startDate, endDate) ->
        weekList = []
        date = startDate
        count = 0

        while date.valueOf() <= endDate.valueOf()
            #console.log date, count
            #Start of the week
            if date.getDay() is 0 or date.valueOf() is startDate.valueOf()
                wStartDate = date

            #end of week
            if date.getDay() is 6 or date.valueOf() is endDate.valueOf()
                weekList.push
                    value: count++
                    startDate: wStartDate
                    endDate: date
                    type: 'week'
                    props: []


            #Go to next date
            date = Days.nextDate date
        weekList


    obj.weekCount = (startDate, endDate) ->
        count = 0
        date = startDate
        firstDay = startDate.getDay()

        while date.valueOf() <= endDate.valueOf()
            count++ if date.getDay() is 0
            date = Days.nextDate date

        if startDate.getDay() is 0 then count else count + 1

    obj