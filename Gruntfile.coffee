matchdep = require 'matchdep'
module.exports = (grunt) ->
    matchdep.filterDev('grunt-*').forEach grunt.loadNpmTasks
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        release:
            npm: {}
            bower: file: 'bower.json'
        browserify:
            compile:
                files: './lib/sheql.js': ['./src/executor.coffee']
                options: transform: ['coffeeify']
    grunt.registerTask 'publish-bower', ['browserify', 'release:bower']
    grunt.registerTask 'publish-npm', ['browserify', 'release:npm']