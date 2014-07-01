matchdep = require 'matchdep'
module.exports = (grunt) ->
    matchdep.filterDev('grunt-*').forEach grunt.loadNpmTasks
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        release:
            options: file: grunt.option('file')

        browserify:
            compile:
                files: './lib/sheql.js': ['./src/executor.coffee']
                options: transform: ['coffeeify']

