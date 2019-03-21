module.exports.index = function(application, req, res) {
	res.render('index',  { validacao: {} });
}


module.exports.autenticar = function(application, req, res) {
	
	var dados_formulario = req.body;

	req.assert('usuario', 'Usuario não pode ser vazio').notEmpty();
	req.assert('senha','Senha não  deve ser vazia').notEmpty();

	var erros = req.validationErrors();

		if(erros){
			res.render("index", {validacao: erros});
			return;

		}


		var connection = application.config.db_conexao;
		var JogadoresDAO = new application.app.models.JogadoresDAO(connection);

		JogadoresDAO.autenticar(dados_formulario,req,res);

		res.send('tudo ok para criar a sessão');
}