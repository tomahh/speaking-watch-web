{print}       = require 'util'
{spawn, exec} = require 'child_process'

task 'build', 'Build speaking-watch.js', -> build()

task 'spec', 'Run Jasmine spec', -> spec()

task 'lint', 'Run coffeelint', -> lint()

task 'test', 'Run both specification and linter', -> lint -> build -> spec()

launch = (cmd, options=[], callback) ->
  app = spawn cmd, options
  app.stdout.pipe(process.stdout)
  app.stderr.pipe(process.stderr)
  app.on 'exit', (status) ->
    if status == 0
      callback?()
    else
      process.exit(status)

build = (callback) ->
  args = ['-c', '-j', 'public/javascripts/speaking-watch.js', '--', 'src/']
  launch './node_modules/.bin/coffee', args, callback

spec = (callback) ->
  args = [
    'start', '--log-level', 'warn',
    '--single-run', '--browsers', 'PhantomJS',
    '--', 'karma.conf.coffee'
  ]
  launch './node_modules/.bin/karma', args, callback

lint = (callback) ->
  args = ['src/', 'spec/', 'Cakefile']
  launch './node_modules/.bin/coffeelint', args, callback

