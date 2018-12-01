/**************************************************
 * Configuring createItem Plugins
 **************************************************/
/**
 * Register Plugins
 */
'use strict';
const fs = require('fs');
const fileType = require('file-type');
const save = require('save-file');
const del = require('delete');
const moment = require('moment');
exports.plugin = {
	name: 'createItem',
	version: '1.0.0',
	register: async function (server, options) {

		server.route([

			{
				method: 'GET',
				path: '/createItem',
				handler: function (request, reply) {
					return reply.view('createItem/form', {})
				}
			},
			{
				method: 'POST',
				path: '/createItem',
				handler: async (request, reply) => {
					try {
						let { file,name } = request.payload;
						let type = fileType(file);
						await save(file, `./upload/${name.split('.')[0]}.${type.ext}`)
						return name 	
					} catch (error) {
						return	reply.response('archivo corupto').code(500)
					}


				}
			},
			{
				method: 'POST',
				path: '/createItem/{pubno}',
				handler: async (request, reply) => {
					let  name  = request.payload;
					return 'success'

				}
			},
			{
				method: 'DELETE',
				path: '/createItem',
				handler: async (request, reply) => {
					let  name  = request.payload;
					await del.promise([`./upload/${name}`])
					return 'success deleted'

				}
			}




		]);
	}
}