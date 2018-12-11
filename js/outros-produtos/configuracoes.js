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
		case 'auto-esporte':
			var revista = new PianoRevista();	
			Produto.codigo = revista.codigo;	
			break;	
		case 'epoca':
			var revistaValida = new RevistasValidas(nome);	
			Produto.codigo = revistaValida.codigo;	
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

var RevistasValidas = function(parametro) {
	this.codigo = parametro;
}

var PianoRevista = function(){
	this.codigo = 'revistas';
};


(function () {
	Produto(Piano.variaveis.getNomeProduto());
	Piano.variaveis.codigoProduto = Produto.codigo;
	Piano.construtor.initTp();
})();

