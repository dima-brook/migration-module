require('babel-register');
require('babel-polyfill');
module.exports = {
  networks: {
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: "*" 
    },
  },
  contracts_build_directory: './src/test/abis',
  contracts_directory: './src/test/contracts',
  compilers: {
    solc: {
      version: "0.8.0"

    }
  }
}
