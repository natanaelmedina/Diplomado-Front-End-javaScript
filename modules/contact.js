/**************************************************
 * Configuring contact Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	server.route([
		
		{
			method : 'GET',
			path : '/contacto',
			handler : function(request, reply) {
				
				reply.view('contact/contact', {"nav-op":'style="display:none;"'});
			}
		},
		{
			method : 'POST',
			path : '/contacto',
			handler : function(request, reply) {
			if ( request.payload.title===''|| request.payload.autor==='' || request.payload.Descripción===''){
			reply({message:'Error:complete los datos'}).code(406)
			}else
			  reply({message:'datos de contacto enviado correctamente'});
			   	
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
	
	name : 'contacto',
	version : '1.0.0'	
};