should = require "should"
describe "propFilter", ->
    propFilter = {}
    pf = {}
    dStart = ''
    dEnd = ''
    beforeEach ->
        pf = propFilter()

    before ->
        propFilter = require "../lib/propFilter"

    after ->
        delete require.cache[require.resolve "../lib/propFilter" ]

    it "should exist", ->
        should.exist pf

    describe "hasProp", ->
        it "should return true", ->
            pf.hasProp props: ['aaa'], 'aaa'
            .should.be.true


        it "should return false", ->
            pf.hasProp props: ['aaaa'], 'aaa'
            .should.be.false
