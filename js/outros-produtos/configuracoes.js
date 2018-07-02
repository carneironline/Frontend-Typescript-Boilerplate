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
		case 'quem-acontece':
			var quemAcontece = new PianoQuem();
			Produto.codigo = quemAcontece.codigo;
			break;
		case 'marie-claire':
			var marieClaire = new PianoMarieClaire();
			Produto.codigo = marieClaire.codigo;
			break;
		case 'casa-e-jardim':
			var casaJardim = new PianoCasaJardim();
			Produto.codigo = casaJardim.codigo;
			break;
		case 'crescer':
			var crescer = new PianoCrescer();
			Produto.codigo = crescer.codigo;
			break;
		case 'auto-esporte':
			var autoEsporte = new PianoAutoEsporte();
			Produto.codigo = autoEsporte.codigo;
			break;
		case 'epoca':
			var epoca = new PianoEpoca();
			Produto.codigo = epoca.codigo;
			break;
		case 'epoca-negocios':
			var epocaNegocios = new PianoEpoca();
			Produto.codigo = epocaNegocios.codigo;
			break;
		case 'galileu':
			var galileu = new PianoGalileu();
			Produto.codigo = galileu.codigo;
			break;
		case 'globo-rural':
			var globoRural = new PianoGloboRural();
			Produto.codigo = globoRural.codigo;
			break;
		case 'pegn':
			var pegn = new PianoPegn();
			Produto.codigo = pegn.codigo;
			break;
		case 'vogue':
			var vogue = new PianoVogue();
			Produto.codigo = vogue.codigo;
			break;
		case 'casa-vogue':
			var casaVogue = new PianoCasaVogue();
			Produto.codigo = casaVogue.codigo;
			break;
		case 'glamour':
			var glamour = new PianoGlamour();
			Produto.codigo = glamour.codigo;
			break;
		case 'gq':
			var gq = new PianoGQ();
			Produto.codigo = gq.codigo;
			break;
		case 'monet':
			var monet = new PianoMonet();
			Produto.codigo = monet.codigo;
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

var PianoQuem = function() {
	this.codigo = 'quem-acontece';
};
var PianoMarieClaire = function() {
	this.codigo = 'marie-clarie';
};
var PianoCasaJardim = function() {
	this.codigo = 'casa-jardim';
};
var PianoCrescer = function() {
	this.codigo = 'crescer';
};
var PianoAutoEsporte = function() {
	this.codigo = 'auto-esporte';
};
var PianoEpoca = function() {
	this.codigo = 'epoca';
};
var PianoEpocaNegocios = function() {
	this.codigo = 'epoca-negocios';
};
var PianoGalileu = function() {
	this.codigo = 'galileu';
};
var PianoGloboRural = function() {
	this.codigo = 'globo-rural';
};
var PianoPegn = function() {
	this.codigo = 'pequenas-empresas';
};
var PianoVogue = function() {
	this.codigo = 'vogue';
};
var PianoCasaVogue = function() {
	this.codigo = 'casa-vogue';
};
var PianoGlamour = function() {
	this.codigo = 'glamour';
};
var PianoGQ = function() {
	this.codigo = 'gq';
};
var PianoMonet = function() {
	this.codigo = 'monet';
};


(function () {
	Produto(Piano.variaveis.getNomeProduto());
	Piano.variaveis.codigoProduto = Produto.codigo;
	Piano.construtor.initTp();
})();
