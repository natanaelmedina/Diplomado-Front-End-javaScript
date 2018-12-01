
/**************************************************
 * Configuring ajaxExample Plugins
 **************************************************/
/**
 * Register Plugins
 */



'use strict';

exports.plugin  = {
    name: 'ajaxExample',
    version: '1.0.0',
    register: async function (server, options) {
        server.route([

            {
                method: 'GET',
                path: '/ajaxExample',
                handler: function (request, reply) {
                  return  reply.view('ajaxExample', { title: 'ajaxexample' });
                }
            },
            {
                method: 'GET',
                path: '/ajaxExample/{get}',
                handler: async function (request, reply) {
                    return  `<p style="color:#fff;">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vel debitis sed neque, quis ab molestias assumenda. 
                Nam commodi neque, accusantium architecto soluta voluptatem quisquam, veritatis cumque corporis deleniti saepe!
               
                </p>`
                }
            },
            {
                method: 'POST',
                path: '/ajaxExample',
                handler: function (request, reply) {
                    return {}
                }
            }
        ])
    }
}








