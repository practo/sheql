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

    describe "monthCount", ->
        it "should exist", ->
            should.exist mn.monthCount

        it "should return count: 2", ->
            mn.monthCount(dStart, dEnd).should.equal 2


        it "should return count: 25", ->
            dStart = new Date 2010, 1, 1
            dEnd = new Date 2012, 1, 1
            mn.monthCount(dStart, dEnd).should.equal 25


    describe "monthCountForYear", ->
        it "should exist", ->
            should.exist mn.monthCountForYear

        it "should return monthCount for a single year only", ->
            dStart = new Date 2010, 5, 1
            dEnd = new Date 2012, 8, 1
            mn.monthCountForYear(dStart, dEnd, 2011).should.equal 12
            mn.monthCountForYear(dStart, dEnd, 2010).should.equal 7
            mn.monthCountForYear(dStart, dEnd, 2012).should.equal 9

    describe "monthCollectionForYear", ->
        it "should exist", ->
            should.exist mn.monthCollectionForYear

        it "should return a collection", ->
            dStart = new Date 2016, 4, 23
            dEnd = new Date 2018, 3, 15

            mn.monthCollectionForYear( dStart, dEnd, 2017).length.should.equal 12
            mn.monthCollectionForYear( dStart, dEnd, 2016).length.should.equal 8


    describe "monthCollection", ->

        it "should.exist", ->
            should.exist mn.monthCollection

        it "should return a collection", ->
            dStart = new Date 2016, 0, 23
            dEnd = new Date 2016, 3, 15

            [m1, m2, m3] = mn.monthCollection dStart, dEnd
            m1.props.should.eql ['jan', '31d']
            m2.props.should.eql ['feb', '29d']
            m3.props.should.eql ['mar', '31d']

        it "should attach meta", ->
            dStart = new Date 2016, 0, 23
            dEnd = new Date 2016, 3, 15

            [m1] = mn.monthCollection dStart, dEnd
            m1.type.should.equal 'month'


        it "should attach start and end dates", ->
            dStart = new Date 2016, 0, 23
            dEnd = new Date 2016, 3, 15

            [m1, ..., ml] = mn.monthCollection dStart, dEnd
            m1.startDate.toString().should.equal dStart.toString()
            m1.endDate.toString().should.equal (new Date 2016, 0, 31).toString()

            ml.startDate.toString().should.equal (new Date 2016, 3, 1).toString()
            ml.endDate.toString().should.equal (new Date 2016, 3, 15).toString()
