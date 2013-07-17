{exec} = require 'child_process'

task 'build', 'Build project from src/*.coffee to public/javascripts/*.js and tests from spec/*.coffee to spec/javascripts/*.js', ->
  exec 'coffee --compile --output public/javascripts/ src/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
  exec 'coffee --compile --output spec/javascripts/ spec/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
