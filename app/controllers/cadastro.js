module.exports.cadastro = function(application,req,res){
	res.render('cadastro');
}

module.exports.cadastrar = function(application,req,res){
	res.send('test - vamos cadastrar');
}