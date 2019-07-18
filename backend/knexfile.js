// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: process.env.SQL_DB,
      user:     process.env.SQL_USER,
      password: process.env.SQL_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
      tableName: 'migrations'
    },
    seeds:{
      directory: __dirname + '/db/seeds'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.SQL_HOST,
      database: process.env.SQL_DB,
      user:     process.env.SQL_USER,
      password: process.env.SQL_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
      tableName: 'migrations'
    },
    seeds:{
      directory: __dirname + '/db/seeds'
    }
  }
};
