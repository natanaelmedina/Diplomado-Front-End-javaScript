
/**************************************************
 * Configuring query Plugins
 **************************************************/
/**
 * Register Plugins
 */

exports.plugin = {
    name: 'query',
    version: '1.0.0',
    register: async function (server, options) {

        server.route([

            {
                method: 'GET',
                path: '/query',
                handler: async function (request, reply) {
                    let qr = request.query;

                    if (!qr.table && !qr.sql)
                        return reply({ message: 'tabla requerida' }).code(404);
                    const pool = require('../Api/server.js').pool;
                    _pool = await pool; // ensures that the pool has been created
                    try {
                        const request = _pool.request(); // or: new sql.Request(pool1)
                        const result = await request.query(qr.sql ? qr.sql : `SELECT ${!qr.fields ? '*' : qr.fields} FROM ${qr.table} ${qr.where ? ('where ' + qr.where) : ''} ${qr.order ? qr.order : ''}`);
                        return reply(result.recordset);
                    } catch (err) {
                        return reply({ message: 'SQL error ==>' + err }).code(404);
                    }


                }
            },
            {
                method: 'POST',
                path: '/query',
                handler: function (request, reply) {
                    return {}
                }
            }



        ]);
    }
}




