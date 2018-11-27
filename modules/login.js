/**************************************************
 * Configuring login Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	server.route([
		
		{
			method : 'GET',
			path : '/login',
			handler : function(request, reply) {
				reply.view('login/login', {title:'login'})
			}
		},
		{
			method : 'GET',
			path : '/login/body',
			handler : function(request, reply) {
				reply.view('login/loginModal', {title:'login'},{ layout:false})
				
			}
		},
		{
			method : 'POST',
			path : '/login',
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
	
	name : 'login',
	version : '1.0.0'	
};