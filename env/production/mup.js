module.exports = {
  servers: {
    one: {
      host: '54.191.146.64',
      username: 'ubuntu',
      pem: '~/.ssh/remotiv-splash.pem',
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },
  meteor: {
    name: 'remotiv-platform',
    path: '../../app/',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://www.remotiv.io/',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    dockerImage: 'kadirahq/meteord',
    deployCheckWaitTime: 60,
    port: 80
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};