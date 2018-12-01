
const Hapi = require('hapi');
const server = Hapi.server({
	port: process.env.PORT || 81,
	host: 'localhost'
});
const {compilar} = require('./build.js');

const Path = require('path');

/**
 * Routing Static Pages [JS, Css, Images, etc]
 */

(async () => {
	compilar() 
	await server.register(require('inert'));
	server.route({
		method: 'GET',
		path: '/public/{path*}',
		handler: {
			directory: {
				path: './public',
				listing: false,
				index: false
			}
		}
	});


	/**
	 * Register all Modules as Plugins Here
	 * 
	 */
	const plugins = [
		require('vision'), //register Vision with others Plugins
		require('./modules/ajaxExample.js'),
		require('./modules/calculadora.js'),
		require('./modules/contact.js'),
		require('./modules/event.js'),
		require('./modules/query.js'),
		require('./modules/login.js'),
		require('./modules/createItem.js')
		

	];

	/**
	 * Routing Views
	 */
	await server.register(plugins)
	server.views({
		engines: { html: require('handlebars') },
		layout: true,
		path: __dirname + '/views',
		layoutPath: Path.join(__dirname, './views/default'), //setting Global Layout,
		partialsPath: Path.join(__dirname, './views/default/partial') //partial Views
	});

	/**
	 * Default route
	 */
	server.route({
		method: 'GET', path: '/', handler: function (request, h) {
		  return h.view('home', { title: 'Home' });
		}
	});

	/**
	 * running Http Node Server with Good Plugins for Logging  
	 */
	const options = {
		ops: {
			interval: 1000
		},
		reporters: {
			myConsoleReporter: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{ log: '*', response: '*' }]
			}, {
				module: 'good-console'
			}, 'stdout'],
			myFileReporter: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{ ops: '*' }]
			}, {
				module: 'good-squeeze',
				name: 'SafeJson'
			}],
			myHTTPReporter: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{ error: '*' }]
			}]
		}
	};

	await server.register({
		plugin: require('good'),
		options,
	});

	/**
	 * Starting Server
	 */
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);

	process.on('unhandledRejection', (err) => {

		console.log(err);
		process.exit(1);
	});
	
})()