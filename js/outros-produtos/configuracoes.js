var Produto = function (nome) {
	Produto.codigo(nome);
};

Produto.codigo = function(nome) {
	Piano.variaveis.codigoProduto = Produto.pegaConfiguracao(nome);
};

Produto.pegaConfiguracao = function(nome) {
	switch (nome) {
		case 'acervo':
			var acervo = new Acervo();
			return acervo.codigo;
			break;
		case 'jornaldigital':
			var jornaldigital = new JornalDigital();
			return jornaldigital.codigo;
			break;
		default:
			Piano.variaveis.fazerRequisicaoBarramento = false;
	}
};

var Acervo = function() {
	$('.galeria.abas-auto .tab-result.passafoto-auto div ul.pagina').bind('click', function() {
		tp.push(["setCustomVariable", "paginaDigitalizada", true]);
		tp.experience.execute();
	});
	this.codigo = 'OG04';
};

var JornalDigital = function() {
	this.codigo = 'OG01';
};

(function () {
	Produto(Piano.variaveis.getNomeProduto());
})();
