const config = require('../config/config.js').config
const sql = require('mssql')

pool = async () => {
    return await new sql.ConnectionPool(config).connect();
}

query = async (PoolInstance,select='select NOSELECT=0') => {
    try {
        const Statement = new sql.PreparedStatement(PoolInstance);
        await Statement.prepare(select);
        const result = await Statement.execute({});
        await Statement.unprepare();
        PoolInstance.close();
        return result;
    } catch (error) {
        
        return error;      
    } 
}
module.exports = {sql,pool,query}