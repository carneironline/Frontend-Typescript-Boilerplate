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
		case 'casa-e-jardim':
			var revistaDigital = new PianoRevista('casa-jardim');
			Produto.codigo = revistaDigital.codigo;
			break;
		case 'pegn':
			var revistaDigital = new PianoRevista('pequenas-empresas');
			Produto.codigo = revistaDigital.codigo;
			break;	
		case 'quem-acontece':				
		case 'marie-claire':		
		case 'crescer':	
		case 'auto-esporte':	
		case 'epoca':	
		case 'epoca-negocios':	
		case 'galileu':	
		case 'globo-rural':			
		case 'vogue':	
		case 'casa-vogue':	
		case 'glamour':	
		case 'gq':	
		case 'monet':	
			var revista = new PianoRevista(nome);	
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

var PianoRevista = function(parametro){
	this.codigo = parametro;
};


(function () {
	Produto(Piano.variaveis.getNomeProduto());
	Piano.variaveis.codigoProduto = Produto.codigo;
	Piano.construtor.initTp();
})();

