/*importa o mongodb8*/

var mongo = require('mongodb');

var conexao_MongoDB = function(){ /*variavel que contem a atribuição da funcão que faz chamada da conexão*/
	console.log('Entrou na funcao de conexão');
	var bancodb = new mongo.Db(
		'banco_got',
		new mongo.Server(
			'localhost',//string contendo o endereço do servidor
			27017, // a porta de conexao
			{}
			),
			{}

		);
	return bancodb;
}

module.exports = function(){
 return conexao_MongoDB;
	
}