should = require "should"
describe "getMonths", ->
    getMonths = {}
    yr = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        yr = getMonths()
        dStart = new Date 2016, 1, 23
        dEnd = new Date 2020, 1, 23

    before ->
        getMonths = require "../lib/getMonths"

    after ->
        delete require.cache[require.resolve "../lib/getMonths" ]

    it "should exist", ->
        should.exist yr

    describe "monthCollection", ->
        it "should exist", ->
            should.exist yr.monthCollection
