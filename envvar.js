process.env.NODE_ENV = 'qa'
const nodeEnv = () => process.env['NODE_ENV']

module.exports = nodeEnv