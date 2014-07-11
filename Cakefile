{print}       = require 'util'
{spawn, exec} = require 'child_process'

task 'build', 'Build project from src/*.coffee to public/javascripts/*.js and tests from spec/*.coffee to spec/javascripts/*.js', ->
    args = ['-c', '-j', 'public/javascripts/speaking-watch.js', '--', 'src/']
    coffee = spawn 'coffee', args
    coffee.stdout.on 'data', (data) -> print data.toString()
    coffee.stderr.on 'data', (data) -> print data.toString()

task 'spec', 'Run Jasmine spec', ->
    args = ['-c', '-j', 'spec/support/jasmine.yml']
    jasmine = spawn 'jasmine-headless-webkit', args
    jasmine.stdout.on 'data', (data) -> print data.toString()
    jasmine.stderr.on 'data', (data) -> print data.toString()
