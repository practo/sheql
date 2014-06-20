module.exports = ->
    obj = {}

    nextDate = (date) ->
        date = new Date date.getFullYear(), date.getMonth(), date.getDate()
        date.setDate date.getDate()+1
        date


    obj.weekCount = (startDate, endDate) ->
        count = 0
        date = startDate
        firstDay = startDate.getDay()

        while date.toString() isnt endDate.toString()
            count++ if date.getDay() is 0
            date = nextDate date
            if date.toString() is 'Invalid Date'
                throw  Error 'Invalid Date'

        if startDate.getDay() is 0 then count else count + 1

    obj