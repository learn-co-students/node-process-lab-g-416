var expect = require('chai').expect
var fs = require('fs')
var path = require('path')
var expectedNodeVersion = 'v12.16.1'
var expectedPlatform = ['darwin', 'linux']
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





