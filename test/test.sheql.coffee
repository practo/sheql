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

    describe "filterCollection", ->
        it "should return 4", ->
            collection =  [{props:['a', 'b', 'c']}, {props: ['x', 'y', 'z']}]
            sh.filterCollection(collection,  ['c', 'b', 'a'])
            .should.eql [collection[0]]

    describe "executor", ->
        it "sssss", ->
            # console.log sh.executor 'y.leap m.jan d.wed'
