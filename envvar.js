const process = require('process')

const env = () => {
  return process.env.NODE_ENV
}

module.exports = env
