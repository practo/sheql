should = require "should"
describe "Sheql", ->
    sheql = {}
    sh = {}
    beforeEach ->
        sh = sheql()


    before ->
        sheql = require("../lib/sheql")

    after ->
        delete require.cache[require.resolve("../lib/sheql")]

    describe "executor", ->


    describe "filterCollection", ->
        it "should filter on dots", ->
            collection = [props: ['sat']]
            filterProps1 = [filterType: '.', filterOn: 'sat']
            filterProps2 = [filterType: '.', filterOn: 'mon']

            sh.filterCollection collection, filterProps1
            .should.eql collection

            sh.filterCollection collection, filterProps2
            .should.eql []


        it "should filter on !", ->
            collection = [props: ['sat']]
            filterProps1 = [filterType: '!', filterOn: 'sat']
            filterProps2 = [filterType: '!', filterOn: 'mon']

            sh.filterCollection collection, filterProps1
            .should.eql []

            sh.filterCollection collection, filterProps2
            .should.eql collection

