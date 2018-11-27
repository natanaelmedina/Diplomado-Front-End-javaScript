/**************************************************
 * Configuring eventos Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	server.route([
		
		{
			method : 'GET',
			path : '/eventos',
			handler : function(request, reply) {
				
				reply.view('eventos', {title:'eventos'});
			}
		},
		{
			method : 'POST',
			path : '/eventos',
			handler : function(request, reply) {
			  	
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
	
	name : 'eventos',
	version : '1.0.0'	
};