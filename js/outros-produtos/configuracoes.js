var Produto = function (nome) {
	Produto.pegaConfiguracao(nome);
};

Produto.codigo = '';

Produto.pegaConfiguracao = function(nome) {
	switch (nome) {
		case 'acervo':
			var acervo = new PianoAcervo();
			Produto.codigo = acervo.codigo;
			break;
		case 'jornaldigital':
			var jornaldigital = new JornalDigital();
			Produto.codigo = jornaldigital.codigo;
			break;
		case 'marie-clarie':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'casa-e-jardim':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'crescer':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'auto-esporte':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'epoca':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'epoca-negocios':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'galileu':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'globo-rural':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'pegn':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'vogue':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'casa-vogue':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'glamour':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'gq':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		case 'monet':
			var revista = new PianoRevista();
			Produto.codigo = revista.codigo;
			break;
		default:
			Piano.variaveis.fazerRequisicaoBarramento = false;
	}
};

var PianoAcervo = function() {
	this.codigo = 'OG04';
};

var JornalDigital = function() {
	this.codigo = 'OG01';
};

var PianoRevista = function(){
	this.codigo = 'revistas';
};


(function () {
	Produto(Piano.variaveis.getNomeProduto());
	Piano.variaveis.codigoProduto = Produto.codigo;
	Piano.construtor.initTp();
})();

