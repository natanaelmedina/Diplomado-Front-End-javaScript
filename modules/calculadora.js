/**************************************************
 * Configuring calculadora Plugins
 **************************************************/
/**
 * Register Plugins
 */
'use strict';

exports.plugin  = {
	name: 'calculadora',
	version: '1.0.0',
	register: async function (server, options) {

		server.route([

			{
				method: 'GET',
				path: '/calculadora',
				handler: function (request, reply) {

					return	reply.view('calculadora', { title: 'eventos' });
				}
			},
			{
				method: 'POST',
				path: '/calculadora',
				handler: function (request, reply) {
					return {}
				}
			}



		]);
	}
}

