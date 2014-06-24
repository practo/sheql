matchdep = require 'matchdep'

config =
    coffee:
        compile:
            src: ['src/*.coffee']
            dest: './lib/'
            expand: true
            flatten: true
            ext: '.js'

module.exports = (grunt) ->
    matchdep.filterDev('grunt-*').forEach (i) -> grunt.loadNpmTasks i
    config.pkg = grunt.file.readJSON 'package.json'
    grunt.initConfig config
