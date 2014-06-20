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

    describe "monthCollection", ->
        it "should.exist", ->
            should.exist mn.monthCollection

        it "should return a collection", ->
            dStart = new Date 2016, 0, 23
            [m1, m2, m3] = mn.monthCollection dStart, 3
            m1.props.should.eql ['jan', '31d']
            m2.props.should.eql ['feb', '29d']
            m3.props.should.eql ['mar', '31d']

        it "should attach meta", ->
            dStart = new Date 2016, 0, 23
            [m1] = mn.monthCollection dStart, 1
            m1.type.should.equal 'month'
            m1.value.should.equal 0


    describe "monthSize", ->
        it "should return month size", ->
            mn.monthSize(2011, 0).should.equal 31
            mn.monthSize(2011, 1).should.equal 28
            mn.monthSize(2012, 1).should.equal 29