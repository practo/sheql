should = require "should"
describe "Sheql", ->

    beforeEach ->
        lxr = Lexer()

    before ->
        Lexer = require("../lib/Lexer")

    after ->
        delete require.cache[require.resolve("../lib/Lexer")]

