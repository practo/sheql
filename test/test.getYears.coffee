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
        delete require.cache[require.resolve "../lib/Lexer" ]

    it "should exist", ->
        should.exist yr

    describe "fetch", ->
        it "should exist", ->
            should.exist yr.fetch

        it "should return 4", ->
            yr.fetch(dStart, dEnd).should.equal 4

