module.exports = ->
    monthName = [
        'jan', 'feb', 'mar',
        'apr', 'may', 'jun',
        'jul', 'aug', 'sep',
        'oct', 'nov', 'dec'
    ]

    obj = {}

    propCollection = (year, month) -> [monthName[month], obj.monthSize(year, month)+'d']

    obj.monthSize = (year, month) ->
        d = new Date year, month+1, 0
        d.getDate()

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

    obj.monthCollection = (startDate, count) ->
        startMonth = startDate.getMonth()
        for i in [0...count]
            startDate.setMonth(startMonth+i)
            year = startDate.getFullYear()
            month = startDate.getMonth()

            value: i
            type: 'month'
            props: propCollection(year, month)

    obj