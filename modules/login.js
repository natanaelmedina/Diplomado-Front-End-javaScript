/**************************************************
 * Configuring login Plugins
 **************************************************/
/**
 * Register Plugins
 */
'use strict';

exports.plugin = {
	name: 'login',
	version: '1.0.0',
	register: async function (server, options) {

		server.route([

			{
				method: 'GET',
				path: '/login',
				handler: function (request, reply) {
					return reply.view('login/login', { title: 'login' })
				}
			},
			{
				method: 'GET',
				path: '/login/body',
				handler: function (request, reply) {
					return reply.view('login/loginModal', { title: 'login' }, { layout: false })

				}
			},
			{
				method: 'POST',
				path: '/login',
				handler: function (request, reply) {
					if (request.payload.title === '' || request.payload.autor === '' || request.payload.Descripción === '') {
						return reply({ message: 'Error:complete los datos' }).code(406)
					} else
						return reply({ message: 'datos de contacto enviado correctamente' });

				}
			}



		]);
	}
}