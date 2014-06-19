should = require "should"
describe "getYears", ->
    getYears = {}
    yr = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        yr = getYears()
        dStart = new Date 2016, 1, 23
        dEnd = new Date 2020, 1, 23

    before ->
        getYears = require "../lib/getYears"

    after ->
        delete require.cache[require.resolve "../lib/getYears" ]

    it "should exist", ->
        should.exist yr

    describe "yearCollection", ->
        it "should exist", ->
            should.exist yr.yearCollection

        it "should return a collection of 4 items", ->
            yr.yearCollection(dStart, dEnd).length .should.equal 4

        it "should attach type as year", ->
            [year] = yr.yearCollection(dStart, dEnd)
            year.type.should.equal 'year'

        it "should attach value", ->
            [year] = yr.yearCollection(dStart, dEnd)
            year.value.should.equal 2016

