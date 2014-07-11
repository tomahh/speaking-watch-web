{print}       = require 'util'
{spawn, exec} = require 'child_process'

task 'build', 'Build project from src/*.coffee to public/javascripts/*.js and tests from spec/*.coffee to spec/javascripts/*.js', ->
    args = ['-c', '-j', 'public/javascripts/speaking-watch.js', '--', 'src/']
    coffee = spawn 'coffee', args
    coffee.stdout.pipe(process.stdout)
    coffee.stderr.pipe(process.stdout)

task 'spec', 'Run Jasmine spec', ->
    args = ['start', '--single-run', '--browsers', 'PhantomJS', '--', 'karma.conf.coffee']
    karma = spawn './node_modules/.bin/karma', args
    karma.stdout.pipe(process.stdout)
    karma.stderr.pipe(process.stdout)

task 'lint', 'Run coffeelint', ->
    args = ['src/', 'spec/', '--reporter', 'csv']
    coffeelint = spawn './node_modules/.bin/coffeelint', args
    coffeelint.stdout.pipe(process.stdout)
    coffeelint.stderr.pipe(process.stdout)

