
module.exports = { 
     config : {
    user: 'sa',
    password: '123456',
    server:'localhost', //`USB\\SQLNATA`,
    port: 14335,
    database: 'deRemate',
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