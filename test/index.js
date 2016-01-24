var test = require('tape'),
  cp = require('child_process')

test('node version', function (t) {
  t.plan(2)
  child = cp.exec('node version',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, process.version)
  })
})

test('node platform', function (t) {
  t.plan(2)
  child = cp.exec('node platform',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, process.platform)
  })
})

test('node envvar', function (t) {
  t.plan(2)
  child = cp.exec('NODE_ENV=qa node envvar',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, 'qa')
  })
})
