function JogadoresDAO(connection){
	this._connection = connection();
}

JogadoresDAO.prototype.inserirJogador = function( jogador ){
	this._connection.open(function(err,mongoclient){
		mongoclient.collection("jogadores", function(err,collection){
			collection.insert(jogador);
			mongoclient.close();
		});
	});
}

JogadoresDAO.prototype.autenticar = function(jogador,req,res){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("jogadores", function(err, collection){
			collection.find(jogador).toArray(function(err, result){

				if(result[0] != undefined){

					req.session.autorizado = true;

					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				}

				if(req.session.autorizado){
					res.redirect("jogo");
				} 
				else
				{
					res.render("index",{validacao:{}});
				}
			});
			mongoclient.close();
		});
	});
}

module.exports = function(){
	return JogadoresDAO;
}