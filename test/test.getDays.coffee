should = require "should"
describe "getDays", ->
    getDays = {}
    dy = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        dy = getDays()

    before ->
        getDays = require "../lib/getDays"

    after ->
        delete require.cache[require.resolve "../lib/getDays" ]

    it "should exist", ->
        should.exist dy

    describe "dayCount", ->
        it "should return dayCount", ->
            startDate = new Date 2014, 0, 1
            endDate = new Date 2014,1,5
            dy.dayCount(startDate, endDate).should.equal  35

    describe "dayCountForMonth", ->
        it "should return dayCount", ->
            dy.dayCountForMonth(2016, 1).should.equal 29
            dy.dayCountForMonth(2011, 0).should.equal 31
            dy.dayCountForMonth(2011, 1).should.equal 28
            dy.dayCountForMonth(2012, 1).should.equal 29
