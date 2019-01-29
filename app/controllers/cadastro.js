module.exports.cadastro = function(application,req,res){
	res.render('cadastro',{validacao:{}, dados_formulario:{}});
}

module.exports.cadastrar = function(application,req,res){
	
	var dados_formulario = req.body;

	req.assert('nome','Nome não pode ser vazio').notEmpty();
	req.assert('usuario','Usuario não pode ser vazio').notEmpty();
	req.assert('senha','Senha não pode ser vazio').notEmpty();
	req.assert('casa','Casa não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro', {validacao: erros, dados_formulario: dados_formulario});
		return;
	}


	var connection = application.config.db_conexao;
	var JogadoresDAO = new application.app.models.JogadoresDAO(connection);

	JogadoresDAO.inserirJogador(dados_formulario)
	res.send('podemos cadastrar');
}