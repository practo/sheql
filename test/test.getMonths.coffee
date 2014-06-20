should = require "should"
describe "getMonths", ->
    getMonths = {}
    mn = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        mn = getMonths()
        dStart = new Date 2016, 1, 23
        dEnd = new Date 2016, 2, 23

    before ->
        getMonths = require "../lib/getMonths"

    after ->
        delete require.cache[require.resolve "../lib/getMonths" ]

    it "should exist", ->
        should.exist mn

    describe "monthCollection", ->
        it "should exist", ->
            should.exist mn.monthCollection

        it "should return count", ->
            mn.monthCollection(dStart, dEnd).should.equal 2
