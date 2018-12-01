/**************************************************
 * Configuring contact Plugins
 **************************************************/
/**
 * Register Plugins
 */
'use strict';

exports.plugin  = {
	name: 'contact',
	version: '1.0.0',
	register: async function (server, options) {

		server.route([

			{
				method: 'GET',
				path: '/contacto',
				handler: function (request, reply) {

					return	reply.view('contact/contact', { "nav-op": 'style="display:none;"' });
				}
			},
			{
				method: 'POST',
				path: '/contacto',
				handler: function (request, reply) {
					if (request.payload.title === '' || request.payload.autor === '' || request.payload.Descripción === '') {
						return	{ message: 'Error:complete los datos' }
					} else
					return { message: 'datos de contacto enviado correctamente' }

				}
			}


		]);
	}
}