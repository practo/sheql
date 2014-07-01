matchdep = require 'matchdep'
module.exports = (grunt) ->
    matchdep.filterDev('grunt-*').forEach grunt.loadNpmTasks
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        release: {}
        bowerRelease:options:
            main: './lib/sheql.js'
            endpoint: 'git://github.com/tusharmath/sheql.git'

        browserify:
            compile:
                files: './lib/sheql.js': ['./src/executor.coffee']
                options: transform: ['coffeeify']

