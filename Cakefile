{exec} = require 'child_process'

task 'build', 'Build project from src/*.coffee to lib/*.js and tests from spec/*.coffee to spec/*.js', ->
  exec 'coffee --compile --output lib/ src/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
  exec 'coffee --compile spec/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
