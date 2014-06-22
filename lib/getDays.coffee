module.exports = ->
    obj = {}

    obj.dayCountForMonth = (year, month) ->
        d = new Date year, month+1, 0
        d.getDate()

    obj.dayCount = (startDate, endDate) ->
        one_day=1000*60*60*24
        startDate_ms = startDate.getTime()
        endDate_ms = endDate.getTime()
        difference_ms = endDate_ms - startDate_ms
        return Math.round difference_ms/one_day
    obj