should = require("should")
describe "Lexer", ->
    lxr = undefined
    Lexer = undefined
    beforeEach ->
        lxr = Lexer()


    before ->
        Lexer = require("../lib/Lexer")


    after ->
        delete require.cache[require.resolve("../lib/Lexer")]



    describe "_ast()", ->
        it "should exist", ->
            should.exist lxr._ast

        it "should build ast", ->
            lxr._ast ['y', '.',  'leap', 'm', '.', 'jan', 'd', '.', 'wed']
            .should.eql
                y: [filterType: '.', filterOn: 'leap']
                m: [filterType: '.', filterOn: 'jan' ]
                d: [filterType: '.', filterOn: 'wed' ]

        it "should attach core type", ->
            lxr._ast([
                "y"
                "m"
                "d"
            ]).should.eql
                y: []
                m: []
                d: []



        it "should attach filters", ->
            lxr._ast([
                "y"
                "!"
                "leap"
                "m"
                ":"
                "n[x+1]"
                "d"
                "."
                "sat"
                "."
                "21"
            ]).should.eql
                y: [
                    filterType: "!"
                    filterOn: "leap"
                ]
                m: [
                    filterType: ":"
                    filterOn: # 'n[x+1]'
                        from: "n"
                        x0: 1
                        x1: 1
                ]
                d: [
                    {
                        filterType: "."
                        filterOn: "sat"
                    }
                    {
                        filterType: "."
                        filterOn: "21"
                    }
                ]





    describe "_splitOnTokens()", ->
        it "should exist", ->
            should.exist lxr._splitOnTokens


        it "should split on string", ->
            lxr._splitOnTokens("y m d").should.eql [
                "y"
                "m"
                "d"
            ]
            lxr._splitOnTokens "y.leap m.jan d.wed"
            .should.eql ['y', '.',  'leap', 'm', '.', 'jan', 'd', '.', 'wed']


        it "should ignore multi spaces", ->
            lxr._splitOnTokens("y m   d").should.eql [
                "y"
                "m"
                "d"
            ]


        it "should split on colons", ->
            lxr._splitOnTokens("y m:n[2x+4] d").should.eql [
                "y"
                "m"
                ":"
                "n[2x+4]"
                "d"
            ]


        it "should split on dots", ->
            lxr._splitOnTokens("y m.sat d").should.eql [
                "y"
                "m"
                "."
                "sat"
                "d"
            ]


        it "should split on exclamation", ->
            lxr._splitOnTokens("y m!sat d").should.eql [
                "y"
                "m"
                "!"
                "sat"
                "d"
            ]


        it "should split on all", ->
            lxr._splitOnTokens("y.sat:n[x+3]:l[2] m!sat d").should.eql [
                "y"
                "."
                "sat"
                ":"
                "n[x+3]"
                ":"
                "l[2]"
                "m"
                "!"
                "sat"
                "d"
            ]




    describe "_x1Extractor()", ->
        it "should exist", ->
            should.exist lxr._x1Extractor


        it "should determine the type for n[x+1]", ->
            lxr._x1Extractor("n[x+1]").should.equal 1


        it "should determine the type for n[2x+1]", ->
            lxr._x1Extractor("n[2x+1]").should.equal 2


        it "should determine the type for n[2x]", ->
            lxr._x1Extractor("n[2x]").should.equal 2


        it "should determine the type for n[2]", ->
            lxr._x1Extractor("n[2]").should.equal 0


        it "should determine the type for n[-2]", ->
            lxr._x1Extractor("n[-2]").should.equal 0


        it "should determine the type for n[-2x]", ->
            lxr._x1Extractor("n[-2x]").should.equal -2




    describe "_x0Extractor()", ->
        it "should exist", ->
            should.exist lxr._x0Extractor


        it "should determine the type for n[x+1]", ->
            lxr._x0Extractor("n[x+1]").should.equal 1


        it "should determine the type for n[2x+1]", ->
            lxr._x0Extractor("n[2x+1]").should.equal 1


        it "should determine the type for n[2x]", ->
            lxr._x0Extractor("n[2x]").should.equal 0


        it "should determine the type for n[2]", ->
            lxr._x0Extractor("n[2]").should.equal 2


        it "should determine the type for n[-2]", ->
            lxr._x0Extractor("n[-2]").should.equal -2


        it "should determine the type for n[-2x]", ->
            lxr._x0Extractor("l[-2x]").should.equal 0




    describe "_parseColonFilters()", ->
        it "should exist", ->
            should.exist lxr._parseColonFilters


        it "should create sub tree for colon tokens", ->
            lxr._parseColonFilters("n[-4x-23]").should.eql
                from: "n"
                x0: -23
                x1: -4





    describe "parser()", ->
        it "should have parse", ->
            should.exist lxr.parser

        it "should return an ast", ->
            lxr.parser("y m d.sat").should.eql
                y: []
                m: []
                d: [
                    filterType: "."
                    filterOn: "sat"
                ]