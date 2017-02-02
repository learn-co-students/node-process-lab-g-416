const Platform = () => {  
  process.platform = ['darwin', 'linux']
  return process.platform;
}

module.exports = Platform;