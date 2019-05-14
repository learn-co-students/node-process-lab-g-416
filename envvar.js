function envvar() {
  process.env.NODE_ENV = 'qa'
  return process.env.NODE_ENV
}

module.exports = envvar
