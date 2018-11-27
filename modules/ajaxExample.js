
/**************************************************
 * Configuring qeury Plugins
 **************************************************/
/**
 * Register Plugins
 */

exports.register = function (server, options, next) {

    server.route([

        {
            method: 'GET',
            path: '/ajaxExample',
            handler: async function (request, reply) {
                reply.view('ajaxExample', {title:'ajaxexample'});
            }
        },
        {
            method: 'GET',
            path: '/ajaxExample/{get}',
            handler: async function (request, reply) {                
                reply(`<p style="color:#fff;">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vel debitis sed neque, quis ab molestias assumenda. 
                Nam commodi neque, accusantium architecto soluta voluptatem quisquam, veritatis cumque corporis deleniti saepe!
                ruta : ${request.params.get}
                </p>`).code(200)
            }
        },
        {
            method: 'POST',
            path: '/ajaxExample',
            handler: function (request, reply) {

            }
        }



    ]);

    next();
};

/**
 * Plugin attributes...
 * we have here the Name and the Version of the plugin
 */
exports.register.attributes = {

    name: 'ajaxExample',
    version: '1.0.0'
};




