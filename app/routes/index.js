/*configurando a rota para a página de index*/
module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application,req,res);
	});

	application.post('/autenticar', function(req,res){
		application.app.controllers.index.autenticar(application,req,res);
	});
}