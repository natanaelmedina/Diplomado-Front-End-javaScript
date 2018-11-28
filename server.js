var Path = require('path');

/*temp code for commpile file  
const runAll = require("npm-run-all");

runAll(["build","babel"], { parallel: false })
	.then(() => {
		console.log("done!");
	})
	.catch(err => {
		console.log(err);
	});

//compilador sasss
const compileSass = require('compile-sass');
compileSass.compileSassAndSaveMultiple({
	sassPath: Path.join(__dirname, '../public/sass/'),
	cssPath: Path.join(__dirname, '../public/css/'),
	files: ['style.scss']
}).then(() => {
	console.log("done!");
})
	.catch(err => {
		console.log(err);
	});

*/
const Hapi = require('hapi');
const server = new Hapi.Server();
const Good = require('good');
const handlebars=require('handlebars');
//const sql = require('mssql');
//const config = require('./config/config.js').config;
//const pool = new sql.ConnectionPool(config).connect();


/**
 * Lets the server run on this Host and Port
 */
server.connection({ host: '127.0.0.1', port:process.env.PORT || 8001 });


/**
 * Routing Static Pages [JS, Css, Images, etc]
 */
server.register(require('inert'), function (err) {

	if (err) {

		throw err;
	}

	server.route({
		method: 'GET', path: '/public/{path*}', handler: {
			directory: {
				path: './public',
				listing: false,
				index: false
			}
		}
	});

});


// /**=
//  * Register all Modules as Plugins Here
//  * 
//  */

// var plugins = [

// 	{ register: require('vision') }, //register Vision with others Plugins
// 	{ register: require('./modules/contact.js') },
// 	{ register: require('./modules/event.js') },
// 	//{ register: require('./modules/query.js') },
// 	{ register: require('./modules/login.js') },
// 	{ register: require('./modules/ajaxExample.js') },
// 	{ register: require('./modules/calculadora.js') }

// ];


// /**
//  * Routing Views
//  */
// server.register(plugins, function (err) {

// 	if (err) {
// 		throw err;
// 	}

// 	server.views({

// 		engines: { html:handlebars},
// 		layout: true,
// 		path: Path.join(__dirname, './views'),
// 		layoutPath: Path.join(__dirname, './views/default/'),//setting Global Layout,
// 	//	partialsPath: Path.join(__dirname, './views/default/partial/') //partial Views
// 	});

// 	/**
// 	 * Default route
// 	 */

// });

server.route({
	method: 'GET', path: '/', handler: function (request, reply) {
	//	reply.view('home', { title: 'Home' });
	reply('probando').code(200);
	}
});


/**
 * running Http Node Server with Good Plugins for Logging  
 */
/**
server.register({

	register: Good,
	options: {

		reporters: [{
			reporter: require('good-console'),
			events: {

				response: '*',
				log: '*'
			}
		}]
	}

}, function (error) {

	if (error) {

		throw error;
	}

	
	 // Starting Server
	
	server.start(function () {

		console.log("Server running on", server.info.uri);
	});

});
 */

server.start(function () {
	console.log("Server running on", server.info.uri);
});

let sql=0,pool=0,config=0;
module.exports = {sql,pool,config,handlebars}
