should = require "should"
describe "Sheql", ->
    executor = {}
    sh = {}
    beforeEach ->
        sh = executor()


    before ->
        executor = require("../src/executor")

    after ->
        delete require.cache[require.resolve("../src/executor")]

    describe "executor", ->

        it "should compute", ->
            startDate = new Date 2014, 0, 5
            endDate = new Date 2014, 11, 30
            sh.executor 'y m:n[2x] d.sat', startDate, endDate
            .length.should.equal 25
            sh.executor 'm d:n[12]', startDate, endDate
            .length.should.equal 12
            sh.executor 'm.feb d.8', startDate, endDate
            .length.should.equal 1




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

