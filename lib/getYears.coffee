module.exports = ->
    obj = {}
    propCollection = (year) ->
        isLeap = obj.isLeapYear year
        if isLeap is true
            return ['leap']
        []

    obj.isLeapYear = (year) ->
        d = new Date year, 2, 0
        if d.getDate() is 29 then true else false



    obj.yearCollection = (startDate, endDate) ->
        startYear = startDate.getFullYear()
        endYear = endDate.getFullYear()
        count =  endYear - startYear

        (value:i, type: 'year', props: propCollection(i) for i in [startYear...endYear])

    obj