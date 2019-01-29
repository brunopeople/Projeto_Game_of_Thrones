function JogadoresDAO(connection){
	this._connection = connection();
}

JogadoresDAO.prototype.inserirJogador = function( jogador ){
	this._connection.open(function(err,mongoclient){
		mongoclient.collection("jodores",function(err,collection){
			collection.insert(jogador);
			mongoclient.close();
		});
	});
}

JogadoresDAO.prototype.autenticar = function( jogador ){
	console.log(jogador);
}

module.exports = function(){
	return JogadoresDAO;
}