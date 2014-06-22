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
        it "sssss", ->
            # console.log sh.executor 'y.leap m.jan d.wed'
