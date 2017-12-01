var Produto = function (nome) {
	Produto.pegaConfiguracao(nome);
};

Produto.codigo = '';

Produto.pegaConfiguracao = function(nome) {
	switch (nome) {
		case 'acervo':
			var acervo = new Acervo();
			Produto.codigo = acervo.codigo;
			break;
		case 'jornaldigital':
			var jornaldigital = new JornalDigital();
			Produto.codigo = jornaldigital.codigo;
			break;
		default:
			Piano.variaveis.fazerRequisicaoBarramento = false;
	}
};

var Acervo = function() {
//	$('.galeria.abas-auto .tab-result.passafoto-auto div ul.pagina').bind('click', function() {
//		tp.push(["setCustomVariable", "paginaDigitalizada", true]);
//		tp.experience.execute();
//	});
	this.codigo = 'OG04';
};

var JornalDigital = function() {
	this.codigo = 'OG01';
};

(function () {
	Produto(Piano.variaveis.getNomeProduto());
	Piano.variaveis.codigoProduto = Produto.codigo;
	Piano.construtor.initTp();
})();
