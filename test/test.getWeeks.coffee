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

    describe "getCollection", ->
        it "should exist", -> should.exist wk.getCollection

        it "should return an array", ->
            dStart = new Date 2014, 1, 3
            dEnd = new Date 2014, 1, 20
            wk.getCollection( dStart, dEnd).length.should.equal 3

        it "should attach start and end dates", ->
            dStart = new Date 2013, 11, 27
            dEnd = new Date 2014, 1, 20
            [w1] = wk.getCollection(dStart, dEnd)
            w1.startDate.valueOf().should.equal dStart.valueOf()
            w1.endDate.valueOf().should.equal (new Date 2013, 11, 28).valueOf()

    describe "getCollectionForMonth", ->
        it "should exist", -> should.exist wk.getCollectionForMonth

        it "should return an array", ->
            wk.getCollectionForMonth(2014, 0).length.should.equal 5


    describe "getCollectionForYear", ->
        it "should exist", -> should.exist wk.getCollectionForYear

        it "should return an array", ->
            wk.getCollectionForYear(2014).length.should.equal 53


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
