module.exports = {

  compilers: {
    solc: {
      version: "0.8.4"
    }
  },

  networks: {
    devolopment: {
      host: "127.0.0.1",
      port: 7545,
      netowork_id: "*"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}