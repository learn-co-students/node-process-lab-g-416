var expect = require('chai').expect
var fs = require('fs')
var path = require('path')
var expectedNodeVersion = 'v8.16.2'
var expectedPlatform = ['win32', 'linux']
var expectedEnv = 'qa'

describe('node', function () {
  it('must have version ' + expectedNodeVersion, function(done){
    var actualNodeVersion = require(path.join(__dirname, '../version'))()
    expect(actualNodeVersion).to.be.equal(expectedNodeVersion)
    done()
  })
})

describe('platform', function () {
  it('must be ' + expectedPlatform, function(done){
    var actualPlatform = require(path.join(__dirname, '../platform'))()
    expect(actualPlatform).to.be.oneOf(expectedPlatform)
    done()
  })
})





