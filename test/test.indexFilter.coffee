should = require "should"
describe "indexFilter", ->
    indexFilter = {}
    dxf = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        dxf = indexFilter()

    before ->
        indexFilter = require "../lib/indexFilter"

    after ->
        delete require.cache[require.resolve "../lib/indexFilter" ]

    it "should exist", ->
        should.exist dxf

    describe "nthElement", ->
        itemCollection = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

        it "should return alternate elements", ->
            dxf.nthElement itemCollection, 2, 0
            .should.eql ['a', 'c', 'e', 'g']

        it "should return 3rd element", ->
            dxf.nthElement itemCollection, 0, 3
            .should.eql ['d']

        it "should return all but first 3", ->
            dxf.nthElement itemCollection, 1, 3
            .should.eql [ 'd', 'e', 'f', 'g']
