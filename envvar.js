process.env.NODE_ENV = 'qa';

module.exports = function () {
  console.log(process.env.NODE_ENV)
  return process.env.NODE_ENV;
};

module.exports();