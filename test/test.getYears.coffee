should = require "should"
describe "getYears", ->
    getYears = {}
    yr = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        yr = getYears()
        dStart = new Date 2016, 1, 23
        dEnd = new Date 2020, 4, 11

    before ->
        getYears = require "../src/getYears"

    after ->
        delete require.cache[require.resolve "../src/getYears" ]

    it "should exist", ->
        should.exist yr

    describe "getCollection", ->
        it "should exist", ->
            should.exist yr.getCollection

        it "should return a collection of 5 items", ->
            yr.getCollection(dStart, dEnd).length .should.equal 5

        it "should attach type as year", ->
            [year] = yr.getCollection(dStart, dEnd)
            year.type.should.equal 'year'

        it "should attach props", ->
            [year1,year2,..., year20] = yr.getCollection(dStart, dEnd)
            year1.props.should.eql ['366d']
            year2.props.should.eql ['365d']
            year20.props.should.eql ['366d']

        it "should attach startDate and endDate", ->
            [year1, year2,..., yearlast] = yr.getCollection(dStart, dEnd)
            year1.startDate.toString().should.equal dStart.toString()
            year1.endDate.toString().should.equal (new Date 2016, 11, 31).toString()

            year2.startDate.toString().should.equal (new Date 2017, 0, 1).toString()
            year2.endDate.toString().should.equal (new Date 2017, 11, 31).toString()

            yearlast.startDate.toString().should.equal (new Date 2020, 0 ,1).toString()
            yearlast.endDate.toString().should.equal (new Date 2020, 4, 11).toString()


    describe "isLeapYear", ->
        it "should work", ->
            yr.isLeapYear(2012).should.be.true
            yr.isLeapYear(2010).should.be.false
