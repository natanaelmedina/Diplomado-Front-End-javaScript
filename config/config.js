
module.exports = { 
     config : {
    user: 'sa',
    password: 'iK2020',
    server:'remaxrd.me', //`USB\\SQLNATA`,
    port: 14335,
    database: 'MaxMonitor',
    pool: {
      max: 10000,
      min: 0,
      idleTimeoutMillis: 300000
    },
  
    options: {
      encrypt: false
    }
  }
 }