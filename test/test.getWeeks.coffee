should = require "should"
describe "getWeeks", ->
    getWeeks = {}
    wk = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        wk = getWeeks()

    before ->
        getWeeks = require "../lib/getWeeks"

    after ->
        delete require.cache[require.resolve "../lib/getWeeks" ]

    it "should exist", ->
        should.exist wk

    describe "weekCount", ->
        it "should exist", ->
            should.exist wk.weekCount

        it "should return week count", ->
            dStart = new Date 2014, 1, 3
            dEnd = new Date 2014, 1, 20
            wk.weekCount(dStart, dEnd).should.equal 3

        it "should return week count for year", ->
            dStart = new Date 2014, 0, 10
            dEnd = new Date 2014, 1, 14
            wk.weekCount(dStart, dEnd).should.equal 6

        it "should return week count for same week", ->
            dStart = new Date 2013, 11, 30
            dEnd = new Date 2014, 0, 2
            wk.weekCount(dStart, dEnd).should.equal 1
