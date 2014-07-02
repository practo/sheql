matchdep = require 'matchdep'
module.exports = (grunt) ->
    matchdep.filterDev('grunt-*').forEach grunt.loadNpmTasks

    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        release: {}
        coffee:compile:
            expand: true
            flatten: true
            src: ['./src/*']
            dest: './lib/'
            ext: '.js'
        browserify:
            compile:
                files: './lib/sheql.js': ['./src/executor']
                options: transform: ['coffeeify']
        grunt.registerTask 'publish', ['coffee', 'release']

