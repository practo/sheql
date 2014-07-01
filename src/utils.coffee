utils = {}
utils.filterItems = (items, condition) ->
    filteredCollection = []
    for item in items
        if condition(item) is yes
            filteredCollection.push item
    filteredCollection

module.exports = utils