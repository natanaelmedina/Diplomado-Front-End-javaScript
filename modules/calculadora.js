/**************************************************
 * Configuring home Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	server.route([
		
		{
			method : 'GET',
			path : '/calculadora',
			handler : function(request, reply) {
				
				reply.view('calculadora', {title:'eventos'});
			}
		},
		{
			method : 'POST',
			path : '/calculadora',
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
	
	name : 'calculadora',
	version : '1.0.0'	
};