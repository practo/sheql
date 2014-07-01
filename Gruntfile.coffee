matchdep = require 'matchdep'
module.exports = (grunt) ->
    matchdep.filterDev('grunt-*').forEach grunt.loadNpmTasks
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        release:
            npmPublish: file: 'package.json'
            bowerPublish: file: 'bower.json'
        browserify:
            compile:
                files: './lib/sheql.js': ['./src/executor.coffee']
                options: transform: ['coffeeify']
    grunt.registerTask 'publish-bower', ['browserify', 'release:bowerPublish']
    grunt.registerTask 'publish-npm', ['browserify', 'release:npmPublish']