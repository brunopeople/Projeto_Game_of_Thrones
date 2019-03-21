module.exports.jogo = function(application, req, res){

if(req.session.autorizado){
	res.render('jogo');

}else{
	res.send('Usuário Este não é o seu lugar, vá fazer o login ');
}


module.exports.sair = function(application, req, res){

res.session.destroy(function(err){
	res.render("index", {validacao:{}});
});