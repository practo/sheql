should = require "should"
describe "indexFilter", ->
    indexFilter = {}
    dxf = {}
    dStart = ''
    dEnd = ''
    itemCollection = []
    beforeEach ->
        dxf = indexFilter()
        itemCollection = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    before ->
        indexFilter = require "../src/indexFilter"

    after ->
        delete require.cache[require.resolve "../src/indexFilter" ]

    it "should exist", ->
        should.exist dxf

    describe "lthElement()", ->
        it "should return alternate elements n[2x] ", ->
            dxf.lthElement itemCollection, 2, 0
            .should.eql  ['b', 'd', 'f']

        it "should return third element [3]", ->
            dxf.lthElement itemCollection, 0, 3
            .should.eql ['e']

        it "should return all but first 3 [x+3]", ->
            dxf.lthElement itemCollection, 1, 3
            .should.eql ['a', 'b', 'c', 'd', 'e']

        it "should return first child [-x+4]", ->
            dxf.lthElement itemCollection, -1, 4
            .should.eql ['d', 'e', 'f', 'g']

        it "should return [0]", ->
            dxf.lthElement itemCollection, 0, 0
            .should.eql [ ]

        it "should return [7]", ->
            dxf.lthElement itemCollection, 0, 7
            .should.eql ['a']



    describe "nthElement", ->

        it "should return alternate elements n[2x] ", ->
            dxf.nthElement itemCollection, 2, 0
            .should.eql ['b', 'd', 'f']

        it "should return 3rd element [3]", ->
            dxf.nthElement itemCollection, 0, 3
            .should.eql ['c']

        it "should return all but first 3 [x+3]", ->
            dxf.nthElement itemCollection, 1, 3
            .should.eql ['c',  'd', 'e', 'f', 'g']

        it "should return first child [-x+4]", ->
            dxf.nthElement itemCollection, -1, 4
            .should.eql [ 'a', 'b', 'c', 'd' ]

        it "should return [0]", ->
            dxf.nthElement itemCollection, 0, 0
            .should.eql [ ]

        it "should return [7]", ->
            dxf.nthElement itemCollection, 0, 7
            .should.eql ['g']

        it "should return 3 elements for [-x+3]", ->
            dxf.nthElement itemCollection, -1, 3
            .should.eql ['a', 'b', 'c']
