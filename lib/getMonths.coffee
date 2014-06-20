Days = require('./getDays')()
module.exports = ->
    monthName = [
        'jan', 'feb', 'mar',
        'apr', 'may', 'jun',
        'jul', 'aug', 'sep',
        'oct', 'nov', 'dec'
    ]

    obj = {}

    propCollection = (year, month) -> [monthName[month], Days.dayCountForMonth(year, month)+'d']


    obj.monthCountForYear = (startDate, endDate, year) ->
        startYear = startDate.getFullYear()
        endYear = endDate.getFullYear()
        if startYear is year and endYear is year
            return @monthCount startDate, endDate

        if startYear is year
            return @monthCount startDate, new Date year, 11, 31

        if endYear is year
            return @monthCount new Date(year, 0, 1), endDate
        12


    #Should return a count only
    obj.monthCount = (startDate, endDate) ->
        #Adding 12 months in a year
        months = (endDate.getFullYear() - startDate.getFullYear() + 1) * 12

        #Adding 12 months in a year
        months -= startDate.getMonth()
        months -= 12 - endDate.getMonth() - 1
        months

    obj.monthCollectionForYear = (startDate, endDate, year)->

        startYear = startDate.getFullYear()
        endYear = endDate.getFullYear()

        if startYear is year and endYear is year
            return @monthCollection startDate, endDate

        if startYear is year
            return @monthCollection startDate, new Date year, 11, 31

        if endYear is year
            return @monthCollection new Date(year, 0, 1), endDate

        return @monthCollection new Date(year, 0, 1), new Date(year, 11, 31)

    obj.monthCollection = (startDate, endDate) ->
        count = @monthCount startDate, endDate
        startMonth = startDate.getMonth()
        for i in [0...count]
            startDate.setMonth(startMonth+i)
            year = startDate.getFullYear()
            month = startDate.getMonth()

            value: i
            type: 'month'
            props: propCollection(year, month)

    obj