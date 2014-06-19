module.exports = ->
    obj = {}

    #Should return a count only
    obj.yearCollection = (startDate, endDate) ->
        startYear = startDate.getFullYear()
        endYear = endDate.getFullYear()
        count =  endYear - startYear

        (value:i, type: 'year' for i in [startYear...endYear])

    obj