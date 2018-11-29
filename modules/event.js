/**************************************************
 * Configuring eventos Plugins
 **************************************************/
/**
 * Register Plugins
 */
'use strict';

exports.plugin  = {
	name: 'eventos',
	version: '1.0.0',
	register: async function (server, options) {

		server.route([

			{
				method: 'GET',
				path: '/eventos',
				handler: function (request, reply) {

					reply.view('eventos', { title: 'eventos' });
				}
			},
			{
				method: 'POST',
				path: '/eventos',
				handler: function (request, reply) {

				}
			}



		]);
	}
}