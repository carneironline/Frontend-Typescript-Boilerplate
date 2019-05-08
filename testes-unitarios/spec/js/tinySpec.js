describe('Tiny JS', function () {

    var helper;
    var defaultUserAgent;

    beforeEach(function () {
        helper = new Helper();
        defaultUserAgent = navigator.userAgent;
        jasmine.Ajax.install();
    });

    afterEach(function () {
        helper.setUserAgent(defaultUserAgent);
        jasmine.Ajax.uninstall();
    });

    describe('Piano.autenticacao', function () {

        describe('função isAutorizado', function () {

            it('deve autorizar quando autorizado tem valor "true"', function () {
                expect(Piano.autenticacao.isAutorizado(false, '', true, '')).toEqual(true);
            });

            it('deve autorizar quando motivo tem valor "indisponivel"', function () {
                expect(Piano.autenticacao.isAutorizado(false, 'indisponivel', false, '')).toEqual(true);
            });

            it('deve autorizar quando termoDeUso tem valor "true"', function () {
                expect(Piano.autenticacao.isAutorizado(true, '', false, '')).toEqual(true);
            });

            it('não deve autorizar quando autorizado tem valor "false", motivo não tem valor "indisponivel" e termoDeUso '
                + 'tem valor "false"', function () {
                    expect(Piano.autenticacao.isAutorizado(false, '', false, '')).toEqual(false);
                });

            it('deve fazer requisição para o barramento quando autorizado tem valor "true" e hrefAssinaturaInadimplente '
                + 'possui algum valor', function () {
                    spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    Piano.autenticacao.isAutorizado(false, '', true, 'asd');
                    expect(Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando autorizado tem valor "true" e hrefAssinaturaInadimplente '
                + 'não possui valor', function () {
                    spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    Piano.autenticacao.isAutorizado(false, '', true, '');
                    expect(Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando autorizado tem valor "false" e hrefAssinaturaInadimplente '
                + 'possui algum valor', function () {
                    spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    Piano.autenticacao.isAutorizado(false, '', false, 'asd');
                    expect(Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
                });

            it('deve chamar o método cookies.get se o usuário não for autorizado', function () {
                spyOn(Piano.cookies, 'get');

                Piano.autenticacao.isAutorizado(false, '', false, '');
                expect(Piano.cookies.get).toHaveBeenCalled();
            });

            it('não deve chamar o método cookies.get se o usuário for autorizado', function () {
                spyOn(Piano.cookies, 'get');

                Piano.autenticacao.isAutorizado(false, '', true, '');
                expect(Piano.cookies.get).not.toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando o usuário não for autorizado e possuir o cookie RTIEX', function () {
                spyOn(Piano.cookies, 'get').and.returnValue('asd');
                spyOn(Piano.cookies, 'set');

                Piano.autenticacao.isAutorizado(false, '', false, '');
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('não deve chamar o método cookies.set quando o usuário não for autorizado e não possuir o cookie RTIEX', function () {
                spyOn(Piano.cookies, 'set');

                Piano.autenticacao.isAutorizado(false, '', false, '');
                expect(Piano.cookies.set).not.toHaveBeenCalled();
            });

        });

        describe('função isLogadoCadun', function () {

            it('deve retornar "true" quando glbid não é vazio', function () {
                expect(Piano.autenticacao.isLogadoCadun('a', '')).toEqual(true);
            });

            it('deve retornar "false" quando glbid é vazio', function () {
                expect(Piano.autenticacao.isLogadoCadun('', '')).toEqual(false);
            });

            it('deve chamar o método cookies.set quando não possui glbid mas possui utp', function () {
                spyOn(Piano.cookies, 'set');

                Piano.autenticacao.isLogadoCadun('', 'a');
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando possui o cookie RTIEX', function () {
                spyOn(Piano.cookies, 'get').and.returnValue('asd');
                spyOn(Piano.cookies, 'set');

                Piano.autenticacao.isLogadoCadun('', '');
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set duas vezes quando não possui glbid mas possui utp e o cookie RTIEX', function () {
                spyOn(Piano.cookies, 'get').and.returnValue('asd');
                spyOn(Piano.cookies, 'set');

                Piano.autenticacao.isLogadoCadun('', 'a');
                expect(Piano.cookies.set.calls.count()).toEqual(2);
            });

            it('não deve chamar o método cookies.set quando possui glbid', function () {
                spyOn(Piano.cookies, 'set');

                Piano.autenticacao.isLogadoCadun('a', '');
                expect(Piano.cookies.set).not.toHaveBeenCalled();
            });

            it('não deve chamar o método cookies.set quando não possui glbid, utp e o cookie RTIEX', function () {
                spyOn(Piano.cookies, 'set');

                Piano.autenticacao.isLogadoCadun('', '');
                expect(Piano.cookies.set).not.toHaveBeenCalled();
            });
        });

        describe('função verificaUsuarioLogadoNoBarramento', function () {

            it('deve chamar o método tp.push quarto vezes se glbid é válido e produto tem valor "undefined"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto(undefined).setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('deve chamar o método tp.push quarto vezes se glbid é válido e produto do cookie é igual ao' +
             'produto da página', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('não deve chamar o método tp.push quando glbid é inválido', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidInvalido').setProduto('produtoValido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());
                spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

            it('deve chamar cookies.set quando glbid for inválido', function(){
                spyOn(Piano.cookies, 'set');	
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);	
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');	
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidInvalido').setProduto('produtoValido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());	
                spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');	
                 Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');	
                expect(Piano.cookies.set).toHaveBeenCalled();

            });

            it('não deve chamar o método tp.push quando glbid é válido, mas produto é inválido', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());
                spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando produto do cookie é diferente o produto do página', function () {
                spyOn(Piano.cookies, 'set');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());
                spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('deve fazer requisição para o barramento quando não possui o cookie utp' , function () {
                    spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', '');
                    expect(Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('deve fazer requisição para o barramento quando possui utp, mas possui glbid diferente do cookie utp'
                , function () {
                    spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidInvalido', 'utp');
                    expect(Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('deve fazer requisição para o barramento quando possui utp, mas possui produto diferente ao do cookie utp', function () {
                    spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                    spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                    expect(Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('deve fazer requisição ao barramento quando não possui cookie utp', function(){
                spyOn(Piano.xmlHttpRequest, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido','');

                expect(Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
            });

           it('deve chamar o método Piano.metricas.setaVariaveis quando o usuário é autorizado', function(){
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').setMotivo("AUTORIZADO").setAutorizado(true).setUUID("1234").build());
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(Piano.metricas, 'setaVariaveis');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(Piano.metricas.setaVariaveis).toHaveBeenCalledWith("1234", "Globo ID", "O Globo");
           });

        });
    });

    describe('Piano.util', function () {

        describe('função isSection', function () {

            it('deve retornar true quando tipoConteudoPiano tem valor "section"', function () {
                spyOn(Piano.variaveis, 'getTipoConteudoPiano').and.returnValue('section');

                expect(Piano.util.isSection()).toEqual(true);
            });

            it('deve retornar false quando tipoConteudoPiano tem valor diferente de "section"', function () {
                spyOn(Piano.variaveis, 'getTipoConteudoPiano').and.returnValue('asd');

                expect(Piano.util.isSection()).toEqual(false);
            });

        });

        describe('função isTipoConteudoUndefined', function () {

            it('deve chamar o método metricas.enviaEventosGA quando getTipoConteudoPiano igual a undefined', function () {
                spyOn(Piano.variaveis, 'getTipoConteudoPiano').and.returnValue(undefined);
                spyOn(Piano.metricas, 'enviaEventosGA');

                Piano.util.isTipoConteudoUndefined();
                expect(Piano.metricas.enviaEventosGA).toHaveBeenCalled();
            });

            it('não deve chamar o método metricas.enviaEventosGA quando getTipoConteudoPiano é diferente de undefined', function () {
                spyOn(Piano.variaveis, 'getTipoConteudoPiano').and.returnValue('asd');
                spyOn(Piano.metricas, 'enviaEventosGA');

                Piano.util.isTipoConteudoUndefined();
                expect(Piano.metricas.enviaEventosGA).not.toHaveBeenCalled();
            });
        });

        describe('função extraiParametrosCampanhaDaUrl', function () {

            it('deve chamar o método tp.push quando tiver o parâmetro utm_medium na url', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.util, 'getWindowLocationSearch').and.returnValue('?utm_medium=abc');

                Piano.util.extraiParametrosCampanhaDaUrl();
                expect(window["tp"].push).toHaveBeenCalled();
            });

            it('deve chamar o método tp.push quando tiver o parâmetro utm_source na url', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.util, 'getWindowLocationSearch').and.returnValue('?utm_source=abc');

                Piano.util.extraiParametrosCampanhaDaUrl();
                expect(window["tp"].push).toHaveBeenCalled();
            });

            it('deve chamar o método tp.push quando tiver o parâmetro utm_campaign na url', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.util, 'getWindowLocationSearch').and.returnValue('?utm_campaign=abc');

                Piano.util.extraiParametrosCampanhaDaUrl();
                expect(window["tp"].push).toHaveBeenCalled();
            });

            it('não deve chamar o método tp.push quando os parâmetros utm_medium, utm_source e utm_campaign na url', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.util, 'getWindowLocationSearch').and.returnValue('');

                Piano.util.extraiParametrosCampanhaDaUrl();
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

        });

        describe('função isOrigemBuscador', function () {

            it('deve chamar a função tp.push com o parametro false quando userAgent não possui valor "ia_archiver"', function () {
                spyOn(window["tp"], 'push');

                Piano.util.isOrigemBuscador();
                expect(window["tp"].push).toHaveBeenCalledWith(["setCustomVariable", "buscador", false]);
            });

            it('deve chamar a função tp.push com o parametro true quando userAgent possui valor "ia_archiver"', function () {
                spyOn(window["tp"], 'push');
                helper.setUserAgent('ia_archiver');

                Piano.util.isOrigemBuscador();
                expect(window["tp"].push).toHaveBeenCalledWith(["setCustomVariable", "buscador", true]);
            });

        });

        describe('função montaUrlStg', function () {
            it('deve retornar vazio se ambientePiano possui valor "prd"', function () {
                spyOn(Piano.variaveis, 'getAmbientePiano').and.returnValue('prd')

                expect(Piano.util.montaUrlStg()).toEqual('');
            });

            it('deve retornar "-stg" se ambientePiano possui valor diferente te "prd"', function () {
                spyOn(Piano.variaveis, 'getAmbientePiano').and.returnValue('a')

                expect(Piano.util.montaUrlStg()).toEqual('-stg');
            });
        });

        describe('função temParametroNaUrl', function () {

            it('deve retornar true quando recebe um parâmetro existente na url', function () {
                spyOn(Piano.util, 'getWindowLocationSearch').and.returnValue('parametroValido');

                expect(Piano.util.temParametroNaUrl('parametroValido')).toEqual(true);
            });

            it('deve retornar false quando recebe um parâmetro não existente na url', function () {
                spyOn(Piano.util, 'getWindowLocationSearch').and.returnValue('parametroValido');

                expect(Piano.util.temParametroNaUrl('parametroInvalido')).toEqual(false);
            });

        });

        describe('função getValorParametroNaUrl', function () {

            it('deve retornar o valor do parâemtro informado na url', function () {
                spyOn(Piano.util, 'temParametroNaUrl').and.returnValue(true);
                spyOn(Piano.util, 'getWindowLocationSearch').and.returnValue('?parametro=valor');

                expect(Piano.util.getValorParametroNaUrl('parametro')).toEqual('valor')
            });

            it('deve retornar "sem parametro" caso não tenha parâmetro', function () {
                spyOn(Piano.util, 'temParametroNaUrl').and.returnValue(false);

                expect(Piano.util.getValorParametroNaUrl('')).toEqual('sem parametro');
            });

        });

        describe('função isDebug', function () {

            it('deve retornar true quando o parâmetro possui valor "true"', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('true');

                expect(Piano.util.isDebug()).toEqual(true);
            });

            it('deve retornar false quando o parâmetro possui valor "false"', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('false');

                expect(Piano.util.isDebug()).toEqual(false);
            });

            it('deve retornar true quando possui o cookie "debug-Piano"', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('a');
                spyOn(Piano.cookies, 'get').and.returnValue('debug-Piano');

                expect(Piano.util.isDebug()).toEqual(true);
            });

        });

        describe('função detectaBurlesco', function () {

        });

        describe('função isDominioOGlobo', function () {

            it('deve retornar a url acessada quando acessar uma url que possui "oglobo"', function () {
                spyOn(Piano.util, 'getWindowLocationHref').and.returnValue('https://oglobo.com/');

                expect(Piano.util.isDominioOGlobo()).toEqual('oglobo.com');
            });

            it('deve retornar a url acessada quando acessar uma url que possui "globoi"', function () {
                spyOn(Piano.util, 'getWindowLocationHref').and.returnValue('https://globoi.com/');

                expect(Piano.util.isDominioOGlobo()).toEqual('globoi.com');
            });

            it('deve retornar "" quando acessar uma url que possui "edg" e "globoi"', function () {
                spyOn(Piano.util, 'getWindowLocationHref').and.returnValue('https://edg.globoi.com/');

                expect(Piano.util.isDominioOGlobo()).toEqual('');
            });

            it('deve retornar "" quando acessar uma url que não possui "oglobo" e nem "globoi"', function () {
                spyOn(Piano.util, 'getWindowLocationHref').and.returnValue('https://google.com/');

                expect(Piano.util.isDominioOGlobo()).toEqual('');
            });

        });

        describe('função callbackMeter', function () {

            it('deve chamar o método metricas.executaAposPageview sem nenhum parâmetro', function () {
                spyOn(Piano.metricas, 'executaAposPageview');

                Piano.util.callbackMeter();
                expect(Piano.metricas.executaAposPageview).toHaveBeenCalledWith();
            });

        });

        describe('função callbackMeterExpired', function () {

            it('deve chamar o método metricas.executaAposPageview com o valor true no parâmetro', function () {
                spyOn(Piano.metricas, 'executaAposPageview');

                Piano.util.callbackMeterExpired();
                expect(Piano.metricas.executaAposPageview).toHaveBeenCalledWith(true);
            });

        });

        describe('função isRevista', function(){
            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "quem-acontece"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('quem-acontece');

                expect(Piano.util.isRevista()).toEqual(true);
            });
            
            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "marie-claire"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('marie-claire');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "casa-e-jardim"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('casa-e-jardim');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "crescer"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('crescer');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            it('deve retornar "true" quando Piano.variaveis.getNomeProduto é "auto-esporte"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('auto-esporte');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            it('deve retornar "true" quando Piano.variaveis.getNomeProduto é "epoca"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('epoca');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "epoca-negocios"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('epoca-negocios');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "galileu"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('galileu');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "globo-rural"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('globo-rural');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "pegn"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('pegn');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            it('deve retornar "true" quando Piano.variaveis.getNomeProduto é "vogue"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('vogue');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "casa-vogue"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('casa-vogue');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            it('deve retornar "true" quando Piano.variaveis.getNomeProduto é "glamour"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('glamour');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "gq"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('gq');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "true" quando Piano.variaveis.getNomeProduto é "monet"', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('monet');

                expect(Piano.util.isRevista()).toEqual(true);
            });

            xit('deve retornar "false" quando Piano.variaveis.getNomeProduto quando não for revista', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('abc');

                expect(Piano.util.isRevista()).toEqual(false);
            });
        });

        describe('função recarregaPiano', () => {

            let tipoConteudoPiano;
            let conteudoExclusivo;
            let nomeProdutoPiano;

            beforeEach(() => {

                spyOn(Piano.construtor, 'initTp');

                tipoConteudoPiano = 'test 1';
                conteudoExclusivo = 'test 2';
                nomeProdutoPiano = 'test 3';

                window.tp = {
                    experience: {
                        execute() {}
                    }
                }
            });

            it('deve atribuir valor para as variáveis', () => {

                Piano.util.recarregaPiano(tipoConteudoPiano, conteudoExclusivo, nomeProdutoPiano);

                expect(window.tipoConteudoPiano).toEqual(tipoConteudoPiano);
                expect(window.conteudoExclusivo).toEqual(conteudoExclusivo);
                expect(window.nomeProdutoPiano).toEqual(nomeProdutoPiano);
            });

            it('deve atribuir valor para "window.regrasTiny.nomeExperiencia" ' +
                'quando "window.regrasTiny" for definido', () => {

                let oldValue = 'this is the old value';
                let newValue = '';
                window.regrasTiny = {
                    nomeExperiencia: oldValue
                };

                Piano.util.recarregaPiano(tipoConteudoPiano, conteudoExclusivo, nomeProdutoPiano);

                expect(window.regrasTiny.nomeExperiencia).toEqual(newValue);
            });

            it('não deve atribuir valor para "window.regrasTiny.nomeExperiencia" quando' +
                '"window.regrasTiny" não for definido', () => {

                window.regrasTiny = undefined;

                Piano.util.recarregaPiano(tipoConteudoPiano, conteudoExclusivo, nomeProdutoPiano);

                expect(window.regrasTiny).toEqual(undefined);
            })

        });
    });

    describe('Piano.construtor', function () {

        beforeAll(()=>{
            window.tp = []
        });

        describe('função initTp', function () {

            it('deve chamar o método Piano.util.detectaBurlesco', function () {
                spyOn(Piano.util, 'detectaBurlesco');

                Piano.construtor.initTp();
                expect(Piano.util.detectaBurlesco).toHaveBeenCalled();
            });

            it('deve chamar o método Piano.util.isTipoConteudoUndefined', function () {
                spyOn(Piano.util, 'isTipoConteudoUndefined');

                Piano.construtor.initTp();
                expect(Piano.util.isTipoConteudoUndefined).toHaveBeenCalled();
            });

            it('deve chamar o método tp.push com o parâmetro "setTags"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.variaveis, 'getTipoConteudoPiano').and.returnValue('abc');

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setTags', ['abc']]);
            });

            it('deve chamar o método tp.push com o parâmetro "setAid"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.variaveis, 'getAmbientePiano').and.returnValue('qlt');
                Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].idSandboxTinypass = 'abc';

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setAid', 'abc']);
            });

            it('deve chamar o método tp.push com o parâmetro "setSandbox"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.variaveis, 'getAmbientePiano').and.returnValue('qlt');
                Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].setSandBox = 'abc';

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setSandbox', 'abc']);
            });

            it('deve chamar o método tp.push com o parâmetro "setDebug"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.util, 'isDebug').and.returnValue('abc');

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setDebug', 'abc']);
            });

            it('deve chamar o método tp.push com o parâmetro "setPageURL"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.util, 'getWindowLocationHref').and.returnValue('abc?def');

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setPageURL', 'abc']);
            });

            it('deve chamar o método tp.push com o parâmetro "setZone"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('abc');

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setZone', 'abc']);
            });

            it('deve chamar o método tp.push com os parâmetros "setCustomVariable" e "nomeProduto"', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('abc');

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setCustomVariable', 'nomeProduto', 'abc']);
            });

            it('deve chamar o método Piano.janelaAnonima.detectPrivateMode', function () {
                spyOn(Piano.janelaAnonima, 'detectPrivateMode');

                Piano.construtor.initTp();
                expect(Piano.janelaAnonima.detectPrivateMode).toHaveBeenCalled();
            });

            it('deve chamar o método tp.push com os parâmetros "setCustomVariable" e "conteudoExclusivo" quando '
                + 'Piano.variaveis.isConteudoExclusivo é true', function () {
                    spyOn(window["tp"], 'push');
                    spyOn(Piano.variaveis, 'isConteudoExclusivo').and.returnValue(true);

                    Piano.construtor.initTp();
                    expect(window["tp"].push).toHaveBeenCalledWith(['setCustomVariable', 'conteudoExclusivo', true]);

                });

            it('não deve chamar o método tp.push com os parâmetros "setCustomVariable" e "conteudoExclusivo" quando '
                + 'Piano.variaveis.isConteudoExclusivo é false', function () {
                    spyOn(window["tp"], 'push');
                    spyOn(Piano.variaveis, 'isConteudoExclusivo').and.returnValue(false);

                    Piano.construtor.initTp();
                    expect(window["tp"].push).not.toHaveBeenCalledWith(['setCustomVariable', 'conteudoExclusivo', true]);
                });

            it('deve chamar o método Piano.autenticacao.verificaUsuarioLogadoNoBarramento', function () {
                spyOn(Piano.autenticacao, 'verificaUsuarioLogadoNoBarramento');

                Piano.construtor.initTp();
                expect(Piano.autenticacao.verificaUsuarioLogadoNoBarramento).toHaveBeenCalled();
            });

            it('deve chamar o método Piano.krux.obtemSegmentacao', function () {
                spyOn(Piano.krux, 'obtemSegmentacao');

                Piano.construtor.initTp();
                expect(Piano.krux.obtemSegmentacao).toHaveBeenCalled();
            });

            it('deve chamar o método tp.push com os parâmetros "setCustomVariable" e "bannerContadorLigado"', function () {
                spyOn(window["tp"], 'push');

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['setCustomVariable', 'bannerContadorLigado', true]);
            });

            it('deve chamar o método Piano.util.isOrigemBuscador', function () {
                spyOn(Piano.util, 'isOrigemBuscador');

                Piano.construtor.initTp();
                expect(Piano.util.isOrigemBuscador).toHaveBeenCalled();
            });

            it('deve chamar o método Piano.util.extraiParametrosCampanhaDaUrl quando '
                + ' Piano.util.isOrigemBuscador é falso', function () {
                    spyOn(Piano.util, 'isOrigemBuscador').and.returnValue(false);
                    spyOn(Piano.util, 'extraiParametrosCampanhaDaUrl');

                    Piano.construtor.initTp();
                    expect(Piano.util.extraiParametrosCampanhaDaUrl).toHaveBeenCalled();
                });

            it('deve chamar o método tp.push com os parâmetros "addHandler" e "meterActive"', function (){
                spyOn(window["tp"], 'push');
                Piano.util.callbackMeter = 'abc';

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['addHandler', 'meterActive', 'abc']);
            });

            it('deve chamar o método tp.push com os parâmetros "addHandler" e "meterExpired"', function (){
                spyOn(window["tp"], 'push');
                Piano.util.callbackMeterExpired = 'abc';

                Piano.construtor.initTp();
                expect(window["tp"].push).toHaveBeenCalledWith(['addHandler', 'meterExpired', 'abc']);
            });

            it('deve chamar o método Piano.autenticacao.verificaUsuarioLogadoNoBarramento quando swg não está definido', function(){
                swgEntitlements = {enablesThis:function(){}}

                spyOn(swgEntitlements, 'enablesThis').and.returnValue(true);
                spyOn(Piano.autenticacao, "verificaUsuarioLogadoNoBarramento");
                Piano.construtor.initTp();
                expect(Piano.autenticacao.verificaUsuarioLogadoNoBarramento).toHaveBeenCalled();
            });

            it('deve chamar o método Piano.google.isSpecificGoogleUser quando swg está definido e o usuário tem entitlements', function(){
                swg = {'asd':'ads'};
                swgEntitlements = {enablesThis:function(){}};

                spyOn(swgEntitlements, 'enablesThis').and.returnValue(true);
                spyOn(Piano.google,"isSpecificGoogleUser");

                Piano.construtor.initTp();
                expect(Piano.google.isSpecificGoogleUser).toHaveBeenCalled();
            });

            it('deve chamar o método Piano.autenticacao.defineUsuarioPiano quando swg está definido e o usuário tem entitlements', function(){
                swg = {'asd':'ads'};
                swgEntitlements = {enablesThis:function(){}};

                spyOn(swgEntitlements, 'enablesThis').and.returnValue(true);
                spyOn(Piano.google,"isSpecificGoogleUser");
                spyOn(Piano.autenticacao, "defineUsuarioPiano");

                Piano.construtor.initTp();
                expect(Piano.autenticacao.defineUsuarioPiano).toHaveBeenCalledWith(true, "AUTORIZADO", true, "");
            });
        });
    });


    describe('Piano.variaveis', function () {

        describe('função isConteudoExclusivo', function () {

            it('deve retornar "true" quando window.conteudoExclusivo é "true"', function () {
                window.conteudoExclusivo = true;

                expect(Piano.variaveis.isConteudoExclusivo()).toEqual(true);
            });

            it('deve retornar "false" quando window.conteudoExclusivo é "false"', function () {
                window.conteudoExclusivo = false;

                expect(Piano.variaveis.isConteudoExclusivo()).toEqual(false);
            });

        });

        describe('função getAmbientePiano', function () {

            it('deve setar o cookie "ambientePiano" quando o parâmetro "ambiente-desejado" possui os valores '
                + '"int", "qlt" ou "prd"', function () {
                    spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('int');
                    spyOn(Piano.cookies, 'set');

                    Piano.variaveis.getAmbientePiano();
                    expect(Piano.cookies.set.calls.count()).toEqual(1);
                });

            it('deve retornar o valor do parâmetro  "ambiente-desejado"', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('int');

                expect(Piano.variaveis.getAmbientePiano()).toEqual('int');
            });

            it('deve remover o cookie "ambientePiano" quando o parâmetro "ambiente-desejado" possui o valor "false"', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('false');
                spyOn(Piano.cookies, 'set');

                Piano.variaveis.getAmbientePiano();
                expect(Piano.cookies.set).toHaveBeenCalledWith(Piano.variaveis.constante.cookie.AMBIENTE, "", -1);
            });

            it('deve retornar o valor do cookie "ambientePiano" quando ele existir e não possuir o parâmetro '
                + '"ambiente-desejado" na url', function () {
                    spyOn(Piano.cookies, 'get').and.returnValue('a');

                    expect(Piano.variaveis.getAmbientePiano()).toEqual('a');
                });

            it('deve retornar window.ambienteUtilizadoPiano quando não possuir o valor na url "ambiente-desejado", '
                + ' nem possuir o cookie "ambientePiano" e window.ambienteUtilizadoPiano tem o valor "int"', function () {
                    window.ambienteUtilizadoPiano = 'int';

                    expect(Piano.variaveis.getAmbientePiano()).toEqual('int');
                });

            it('deve retornar "prd" quando não possuir o valor na url "ambiente-desejado", '
                + ' nem possuir o cookie "ambientePiano" e window.ambienteUtilizadoPiano tem o valor "abc"', function () {
                    window.ambienteUtilizadoPiano = 'abc';

                    expect(Piano.variaveis.getAmbientePiano()).toEqual('prd');
                });

        });

        describe('função executouPageview', function () {

            it('deve retornar "true" quando  window.executouPageview é "true"', function () {
                window.executouPageview = true;

                expect(Piano.variaveis.executouPageview()).toEqual(true);
            });

            it('deve retornar "false" quando  window.executouPageview é "false"', function () {
                window.executouPageview = false;

                expect(Piano.variaveis.executouPageview()).toEqual(false);
            });

        });

        describe('função getServicoId', function () {

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é oglobo', function () {
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('oglobo');

                expect(Piano.variaveis.getServicoId()).toEqual('3981');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é blogs', function () {
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('blogs');

                expect(Piano.variaveis.getServicoId()).toEqual('3981');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é kogut', function () {
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('kogut');

                expect(Piano.variaveis.getServicoId()).toEqual('3981');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é "acervo"', function () {
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('acervo');

                expect(Piano.variaveis.getServicoId()).toEqual('3981');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é "jornaldigital"', function () {
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('jornaldigital');

                expect(Piano.variaveis.getServicoId()).toEqual('3981');
            });
            

            it('deve retornar 6697 quando Piano.util.isRevista() for "true"', function (){
                spyOn(Piano.util, 'isRevista').and.returnValue(true);

                expect(Piano.variaveis.getServicoId()).toEqual('6697');
            });
            

            it('deve retornar 0000 quando o Piano.variaveis.getNomeProduto() for abc', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('abc');

                expect(Piano.variaveis.getServicoId()).toEqual('0000');
            });            

        });

        describe('função getCodigoProduto', function(){
            it('deve retornar OG03 quando nomeProduto igual a oglobo',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('oglobo');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('OG03');
            });

            it('deve retornar OG03 quando nomeProduto igual a blogs',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('blogs');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('OG03');
            });

            it('deve retornar OG03 quando nomeProduto igual a kogut',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('kogut');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('OG03');
            });

            it('deve retornar OG04 quando nomeProduto igual a acervo',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('acervo');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('OG04');
            });

            it('deve retornar OG01 quando nomeProduto igual a jornaldigital',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('jornaldigital');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('OG01');
            });

            xit('deve retornar revistas quando nomeProduto igual a quem-acontece',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('quem-acontece');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('quem-acontece');
            });            

            xit('deve retornar revistas quando nomeProduto igual a marie-claire',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('marie-claire');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('marie-claire');
            });            

            xit('deve retornar revistas quando nomeProduto igual a casa-e-jardim',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('casa-e-jardim');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('casa-jardim');
            });            

            xit('deve retornar revistas quando nomeProduto igual a crescer',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('crescer');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('crescer');
            });
            
            it('deve retornar auto-esporte quando nomeProduto igual a auto-esporte',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('auto-esporte');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('auto-esporte');
            });
            
            it('deve retornar epoca quando nomeProduto igual a epoca',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('epoca');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('epoca');
            });

            xit('deve retornar revistas quando nomeProduto igual a epoca-negocios',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('epoca-negocios');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('epoca-negocios');
            });            

            xit('deve retornar revistas quando nomeProduto igual a globo-rural',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('globo-rural');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('globo-rural');
            });            

            xit('deve retornar revistas quando nomeProduto igual a pegn',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('pegn');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('pequenas-empresas');
            });            

            it('deve retornar revistas quando nomeProduto igual a vogue',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('vogue');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('vogue');
            });            

            xit('deve retornar revistas quando nomeProduto igual a casa-vogue',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('casa-vogue');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('casa-vogue');
            });

            it('deve retornar revistas quando nomeProduto igual a glamour',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('glamour');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('glamour');
            });            

            xit('deve retornar revistas quando nomeProduto igual a gq',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('gq');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('gq');
            });            

            xit('deve retornar revistas quando nomeProduto igual a monet',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('monet');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('monet');
            });
            
            it('deve logar erro quando nomeProduto igual a abc',function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('abc');
                spyOn(Piano.metricas, 'enviaEventosGA');

                Piano.variaveis.getCodigoProduto();

                expect(Piano.metricas.enviaEventosGA).toHaveBeenCalled();
            });

            it('deve executar o tp.push 3 vezes quando nomeProduto igual a abc', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('abc');
                spyOn(window["tp"], 'push');

                Piano.variaveis.getCodigoProduto();

                expect(window["tp"].push.calls.count()).toEqual(3);
            });

            it('deve retornar error quando nomeProduto igual a abc', function(){
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('abc');

                expect(Piano.variaveis.getCodigoProduto()).toEqual('error');
            });
        });

        

    });

    describe('Piano.krux', function () {

        describe('função tem', function () {

            it('deve retornar true quando possui valor no localStorage', function () {
                spyOn(localStorage, 'getItem').and.returnValue(true);

                expect(Piano.krux.tem()).toEqual(true);
            });

            it('deve retornar false quando não possui valor no localStorage', function () {
                spyOn(localStorage, 'getItem').and.returnValue(false);

                expect(Piano.krux.tem()).toEqual(false);
            });
        });

        describe('função ligado', function () {

            it('deve setar o cookie quando ambienteUtilizadoPiano foi diferente de prd e o valorParametro for false', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('false');
                window.ambienteUtilizadoPiano = "abc";

                spyOn(Piano.cookies, 'set');

                Piano.krux.ligado();

                expect(Piano.cookies.set.calls.count()).toEqual(1);
            });

            it('deve retornar false quando ambienteUtilizadoPiano foi diferente de prd e o valorParametro for false', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('false');
                window.ambienteUtilizadoPiano = "abc";

                expect(Piano.krux.ligado()).toEqual(false);
            });

            it('deve remover o cookie quando ambienteUtilizadoPiano for igual a prd e o valorParametro for true', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('true');
                window.ambienteUtilizadoPiano = "prd";

                spyOn(Piano.cookies, 'set');

                Piano.krux.ligado();

                expect(Piano.cookies.set.calls.count()).toEqual(1);
            });

            it('deve remover o cookie quando o valorParametro for true', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('true');

                spyOn(Piano.cookies, 'set');

                Piano.krux.ligado();

                expect(Piano.cookies.set.calls.count()).toEqual(1);
            });


            it('deve remover o cookie quando o ambienteUtilizadoPiano for prd', function () {
                window.ambienteUtilizadoPiano = 'prd';

                spyOn(Piano.cookies, 'set');

                Piano.krux.ligado();

                expect(Piano.cookies.set.calls.count()).toEqual(1);
            });

            it('deve retornar true quando ambienteUtilizadoPiano foi igual de prd e o valorParametro for true', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('true');
                window.ambienteUtilizadoPiano = "prd";

                expect(Piano.krux.ligado()).toEqual(true);
            });

            it('deve retornar true quando valorParametro for true', function () {
                spyOn(Piano.util, 'getValorParametroNaUrl').and.returnValue('true');

                expect(Piano.krux.ligado()).toEqual(true);
            });

            it('deve retornar true quando ambienteUtilizadoPiano for igual a prd', function () {
                window.ambienteUtilizadoPiano = 'prd';

                expect(Piano.krux.ligado()).toEqual(true);
            });

            it('deve retornar false quando não possuir o cookie KRUXLIGADO', function () {
                window.ambienteUtilizadoPiano = 'abc';
                spyOn(Piano.cookies, 'get').and.returnValue('false');

                expect(Piano.krux.ligado()).toEqual(false);
            });

            it('deve retornar true quando valorParametro for nulo, ambienteUtilizadoPiano for diferente de produção e possuir o cookie KRUXLIGADO', function () {
                window.ambienteUtilizadoPiano = 'abc';
                spyOn(Piano.cookies, 'get').and.returnValue('true');
                expect(Piano.krux.ligado()).toEqual(true);
            });
        });

        describe('função obtemSegmentacao', function () {

            it('deve executar o método tp.push 3x quando os métodos Piano.krux.tem e Piano.krux.ligado forem true e possui 3 valores no localStorage do krux', function () {
                spyOn(Piano.krux, 'tem').and.returnValue(true);
                spyOn(Piano.krux, 'ligado').and.returnValue(true);
                spyOn(window["tp"], 'push');

                spyOn(localStorage, 'getItem').and.returnValue('a, b, c');
                Piano.krux.obtemSegmentacao();
                expect(window["tp"].push.calls.count()).toEqual(3);
            });

            it('não deve executar o método tp.push quando o método Piano.krux.tem retornar false', function () {
                spyOn(Piano.krux, 'tem').and.returnValue(false);
                spyOn(window["tp"], 'push');

                Piano.krux.obtemSegmentacao();
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

            it('não deve executar o método tp.push quando o método Piano.krux.ligado retornar false', function () {
                spyOn(Piano.krux, 'ligado').and.returnValue(false);
                spyOn(window["tp"], 'push');
                Piano.krux.obtemSegmentacao();
                expect(window["tp"].push).not.toHaveBeenCalled();
            });
        });
    });

    describe('Piano.metricas', function () {

        describe('função enviaEventosGA', function () {

            it('deve chamar o método dataLayer.push', function () {
                spyOn(window["dataLayer"], 'push');

                Piano.metricas.enviaEventosGA('', '');
                expect(window["dataLayer"].push).toHaveBeenCalled();
            });

        });

        describe('função montaRotuloGA', function () {

            it('deve retornar nomeExperiencia + subsegmentacaoPiano quando regrasTiny e subsegmentacaoPiano '
                + 'possuem valor', function () {
                    window.regrasTiny = { nomeExperiencia: 'nomeExperiencia' };
                    window.subsegmentacaoPiano = 'subsegmentacao';

                    expect(Piano.metricas.montaRotuloGA()).toEqual('nomeExperiencia - subsegmentacao')
                });

            it('deve retornar nomeExperiencia quando regrasTiny possui valor mas e subsegmentacaoPiano '
                + 'não possui valor', function () {
                    window.regrasTiny = { nomeExperiencia: 'nomeExperiencia' };
                    window.subsegmentacaoPiano = undefined;

                    expect(Piano.metricas.montaRotuloGA()).toEqual('nomeExperiencia')
                });

            it('deve retornar nomeExperiencia + subsegmentacaoPiano quando nomeExperiencia e subsegmentacaoPiano '
                + 'possuem valor', function () {
                    window.regrasTiny = undefined;
                    window.nomeExperiencia = 'nomeExperiencia';
                    window.subsegmentacaoPiano = 'subsegmentacao';

                    expect(Piano.metricas.montaRotuloGA()).toEqual('nomeExperiencia - subsegmentacao')
                });

            it('deve retornar nomeExperiencia quando nomeExperiencia possui valor mas e subsegmentacaoPiano '
                + 'não possui valor', function () {
                    window.regrasTiny = undefined;
                    window.nomeExperiencia = 'nomeExperiencia';
                    window.subsegmentacaoPiano = undefined;

                    expect(Piano.metricas.montaRotuloGA()).toEqual('nomeExperiencia')
                });

            it('deve retornar " " quando não possui regrasTiny e nem nomeExperiencia', function () {
                window.regrasTiny = undefined;
                window.nomeExperiencia = undefined;

                expect(Piano.metricas.montaRotuloGA()).toEqual(' ');
            });
        });

        describe('função setLimiteContagem', function () {

            describe('GALimite', function () {

                it('deve ser "-" se não houver passagem de parâmetro', function () {
                    Piano.metricas.setLimiteContagem();
                    expect(_GALimite).toEqual('-')
                });

                it('deve ser "nomeExperiencia : maxViews" quando houver passagem de parâmetro', function () {
                    Piano.metricas.setLimiteContagem(new MetricasBuilder().setNomeExperiencia('nomeExperiencia').setMaxViews('maxViews').build());
                    expect(_GALimite).toEqual('nomeExperiencia : maxViews');
                });

            });

            describe('GAContagem', function () {

                it('deve ser "-" quando não houver passagem de parâmetro', function () {
                    Piano.metricas.setLimiteContagem();
                    expect(_GAContagem).toEqual('-');
                });

                it('deve adicionar "0" quando views possuir apenas um algarismo', function () {
                    Piano.metricas.setLimiteContagem(new MetricasBuilder().setViews(1).build());
                    expect(_GAContagem).toEqual('01');
                });

                it('não deve adicionar "0" quando views possuir mais de um algarismo', function () {
                    Piano.metricas.setLimiteContagem(new MetricasBuilder().setViews(10).build());
                    expect(_GAContagem).toEqual('10');
                });

            });


        });

        describe('função identificarPassagemRegister', function () {

            it('deve retornar Piano.variaveis.constante.metricas.EVENTO_SEM_ACAO quando não '
                + 'possuir o cookie RTIEX', function () {
                    Piano.variaveis.constante.metricas.EVENTO_SEM_ACAO = 'abc';
                    spyOn(Piano.cookies, 'get').and.returnValue('');

                    expect(Piano.metricas.identificarPassagemRegister()).toEqual('abc');
                });

            it('deve chamar o método cookies.set quando possuir o cookie RTIEX', function () {
                spyOn(Piano.cookies, 'get').and.returnValue('a');
                spyOn(Piano.cookies, 'set');

                Piano.metricas.identificarPassagemRegister(new MetricasBuilder().setFluxo('fluxo').build());
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('não deve chamar o método cookies.set quando não possuir o cookie RTIEX', function () {
                spyOn(Piano.cookies, 'get').and.returnValue('');
                spyOn(Piano.cookies, 'set');

                Piano.metricas.identificarPassagemRegister();
                expect(Piano.cookies.set).not.toHaveBeenCalled();
            });

            it('deve retornar "register-hardwall-passou" quando fluxo possuir "hardwall"', function () {
                spyOn(Piano.cookies, 'get').and.returnValue('a');

                expect(Piano.metricas.identificarPassagemRegister(
                    new MetricasBuilder().setFluxo('hardwall').build())).toEqual('register-hardwall-passou');
            });

            it('deve retornar "register-contagem-passou" quando fluxo não possuir "hardwall"', function () {
                spyOn(Piano.cookies, 'get').and.returnValue('a');

                expect(Piano.metricas.identificarPassagemRegister(
                    new MetricasBuilder().setFluxo('budega').build())).toEqual('register-contagem-passou');
            });

        });

        describe('função executaAposPageview', function () {

            it('não deve chamar o método metricas.setLimiteContagem quando executou o pageview', function () {
                spyOn(Piano.variaveis, 'executouPageview').and.returnValue(true);
                spyOn(Piano.metricas, 'setLimiteContagem');

                Piano.metricas.executaAposPageview();
                expect(Piano.metricas.setLimiteContagem).not.toHaveBeenCalled();
            });

            it('deve chamar o método metricas.setLimiteContagem quando não executou o pageview', function () {
                spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);
                spyOn(Piano.metricas, 'setLimiteContagem');
                regrasTiny = new MetricasBuilder().setFluxo('fluxo').setNomeExperiencia('nomeExperiencia').build();
                Piano.metricas.executaAposPageview();
                expect(Piano.metricas.setLimiteContagem).toHaveBeenCalled();
            });

            it('deve setar "regrasTiny.fluxo" com "window.tpContext" quando "window.tpContext" não é vazio e não executou o pageview', function () {
                spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);
                window.tpContext = 'tpcontext';

                Piano.metricas.executaAposPageview();
                expect(regrasTiny.fluxo).toEqual('tpcontext');
            });

            it('deve setar "regrasTiny.fluxo" com "-" quando "window.tpContext" é vazio e não executou o pageview', function () {
                spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);
                window.tpContext = undefined;

                Piano.metricas.executaAposPageview();
                expect(regrasTiny.fluxo).toEqual('-');
            });

            it('deve setar "regrasTiny.nomeExperiencia" com "window.nomeExperiencia" quando "window.nomeExperiencia" não é vazio'
                + ' e não executou o pageview', function () {
                    spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);
                    window.nomeExperiencia = 'nomeExperiencia';

                    Piano.metricas.executaAposPageview();
                    expect(regrasTiny.nomeExperiencia).toEqual('nomeExperiencia');
                });

            it('deve setar "regrasTiny.nomeExperiencia" com "" quando "window.nomeExperiencia" é vazio e não executou '
                + 'o pageview', function () {
                    spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);
                    window.nomeExperiencia = undefined;

                    Piano.metricas.executaAposPageview();
                    expect(regrasTiny.nomeExperiencia).toEqual('');
                });

            it('deve chamar o método metricas.enviaEventosGA quando expirou é undefined e não executou o pageview', function () {
                spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);
                spyOn(Piano.metricas, 'enviaEventosGA');

                Piano.metricas.executaAposPageview(undefined);
                expect(Piano.metricas.enviaEventosGA).toHaveBeenCalled();
            });

            it('não deve chamar o método metricas.enviaEventosGA quando expirou é diferente de undefined e não '
                + ' executou o pageview', function () {
                    spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);
                    spyOn(Piano.metricas, 'enviaEventosGA');

                    Piano.metricas.executaAposPageview('abc');
                    expect(Piano.metricas.enviaEventosGA).not.toHaveBeenCalled();
                });

            it('deve setar "executouPageview" como "true" quando não executou o pageview', function () {
                executouPageview = false;
                spyOn(Piano.variaveis, 'executouPageview').and.returnValue(false);

                Piano.metricas.executaAposPageview();
                expect(executouPageview).toEqual(true);
            });

        });

    });

    describe('Piano.banner', function () {

        describe('função mostrarFooter', function () {

            it('deve chamar a função adicionarCss', function () {
                spyOn(Piano.util, 'adicionarCss');

                Piano.banner.mostrarFooter();
                expect(Piano.util.adicionarCss).toHaveBeenCalled();
            });

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.banner.mostrarFooter();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

        describe('função mostrarBotaoAssinaturaHeaderFooter', function () {

            it('deve chamar a função util.adicionarCss', function () {
                spyOn(Piano.util, 'adicionarCss');

                Piano.banner.mostrarBotaoAssinaturaHeaderFooter();
                expect(Piano.util.adicionarCss).toHaveBeenCalled();
            });

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.banner.mostrarBotaoAssinaturaHeaderFooter();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

    });

    describe('Piano.register', function () {

        describe('função mostrarBarreira', function () {

            it('deve chamar o método util.adicionarCss', function () {
                spyOn(Piano.util, 'adicionarCss');

                Piano.register.mostrarBarreira();
                expect(Piano.util.adicionarCss).toHaveBeenCalled();
            });

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.register.mostrarBarreira();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

            it('deve remover o cookie UTP através do método cookies.set', function () {
                spyOn(Piano.cookies, 'set');

                Piano.register.mostrarBarreira();
                expect(Piano.cookies.set).toHaveBeenCalledWith(Piano.variaveis.constante.cookie.UTP, '', -1);
            });

            it('deve chamar o método metricas.enviaEventosGA', function () {
                spyOn(Piano.metricas, 'enviaEventosGA');

                Piano.register.mostrarBarreira();
                expect(Piano.metricas.enviaEventosGA).toHaveBeenCalled();
            });

            it('deve setarr o cookie RTIEX através do método cookies.set', function () {
                spyOn(Piano.cookies, 'set');

                Piano.register.mostrarBarreira();
                expect(Piano.cookies.set).toHaveBeenCalledWith(Piano.variaveis.constante.cookie.RTIEX, true, 1);
            });

        });

    });

    describe('Piano.paywall', function () {

        describe('função redirecionarBarreira', function () {

            it('deve chamar o método metricas.enviaEventosGA', function () {
                spyOn(Piano.metricas, 'enviaEventosGA');
                spyOn(window, 'setTimeout');

                Piano.paywall.redirecionarBarreira();
                expect(Piano.metricas.enviaEventosGA).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set', function () {
                spyOn(Piano.cookies, 'set');
                spyOn(window, 'setTimeout');

                Piano.paywall.redirecionarBarreira();
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método setTimeout', function () {
                spyOn(window, 'setTimeout');

                Piano.paywall.redirecionarBarreira();
                expect(window.setTimeout).toHaveBeenCalled();
            });
        });

    });


    describe('Piano.registerPaywall', function () {

        describe('função chama barreira register / paywall', function () {

            it('deve chamar o método metricas.enviaEventosGA', function () {
                spyOn(Piano.metricas, 'enviaEventosGA');

                Piano.registerPaywall.mostrarBarreira('1','register');
                expect(Piano.metricas.enviaEventosGA).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set', function () {
                spyOn(Piano.cookies, 'set');

                Piano.registerPaywall.mostrarBarreira('1','register');
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método util.adicionarCss', function () {
                spyOn(Piano.util, 'adicionarCss');

                Piano.registerPaywall.mostrarBarreira('1','register');
                expect(Piano.util.adicionarCss).toHaveBeenCalled();
            });

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.registerPaywall.mostrarBarreira('1','register');
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

    });

    describe('Piano.comunicado', function () {

        describe('função mostrarInformacao', function () {

            it('deve chamar a função util.adicionarCss', function () {
                spyOn(Piano.util, 'adicionarCss');

                Piano.comunicado.mostrarInformacao();
                expect(Piano.util.adicionarCss).toHaveBeenCalled();
            });

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.comunicado.mostrarInformacao();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

    });

    describe('Piano.adblock', function () {

        describe('função mostrarAdBlock', function () {

            it('deve chamar a função util.adicionarCss', function () {
                spyOn(Piano.util, 'adicionarCss');

                Piano.adblock.mostrarAdBlock();
                expect(Piano.util.adicionarCss).toHaveBeenCalled();
            });

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.adblock.mostrarAdBlock();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

    });

    describe('Piano.bloqueios', function () {

        describe('função bloqueiaViewMode', function () {


            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.bloqueios.bloqueiaViewMode();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

        describe('função bloqueiaViewMode', function () {

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.bloqueios.liberarEsc();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

    });

    describe('Piano.escape', function () {

        

    });

    describe('Piano.parceiro', function () {

        describe('função mostraFooterParceiro', function () {

            it('deve chamar a função util.adicionarCss', function () {
                spyOn(Piano.util, 'adicionarCss');

                Piano.parceiro.mostraFooterParceiro();
                expect(Piano.util.adicionarCss).toHaveBeenCalled();
            });

            it('deve chamar o método XmlHttpRequest.geraScriptNaPagina', function () {
                spyOn(Piano.xmlHttpRequest, 'geraScriptNaPagina');

                Piano.parceiro.mostraFooterParceiro();
                expect(Piano.xmlHttpRequest.geraScriptNaPagina).toHaveBeenCalled();
            });

        });

    });

    describe('Piano.inadimplente', function () {

        describe('função getLinkAssinatura', function () {
            it('Deve retornar vazio quando o parametro passado for vazio', function () {
                expect(Piano.inadimplente.getLinkAssinatura("")).not.toEqual(' ');
            });

            it('Deve retornar o href quando tiver o rel igual a assinatura', function () {
                expect(Piano.inadimplente.getLinkAssinatura([{
                    rel: 'assinatura',
                    href: 'abc'
                }])).toEqual('abc');
            });

            it('deve retornar " " quando rel for diferente a assinatura', function () {
                expect(Piano.inadimplente.getLinkAssinatura([{
                    rel: 'abc'
                }])).not.toEqual(' ');
            });
        });

    });

    describe('Piano.xmlHttpRequest', function () {

        describe('função geraScriptNaPagina', function () {

            it('deve possuir a url da requisição mais recente igual a url enviada como parâmetro', function () {
                Piano.xmlHttpRequest.geraScriptNaPagina('/some/cool/url');

                expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
            });

            it('deve chamar o método xhr.open com o parâmetro GET', function () {
                spyOn(XMLHttpRequest.prototype, 'open');

                Piano.xmlHttpRequest.geraScriptNaPagina();
                expect(XMLHttpRequest.prototype.open.calls.mostRecent().args[0]).toEqual('GET');
            });

            it('deve chamar o método xhr.send', function () {
                spyOn(XMLHttpRequest.prototype, 'send');

                Piano.xmlHttpRequest.geraScriptNaPagina();
                expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
            });

            it('deve chamar o método document.body.appendChild quando a requisição responde com 200', function () {
                spyOn(document.body, 'appendChild');

                Piano.xmlHttpRequest.geraScriptNaPagina();

                // mockar a resposta da requisição xhr
                request = jasmine.Ajax.requests.mostRecent();
                request.respondWith({ status: 200 });

                expect(document.body.appendChild).toHaveBeenCalled();
            });

            it('não deve chamar o método document.body.appendChild quando a requisição responde com 300', function () {
                spyOn(document.body, 'appendChild');

                Piano.xmlHttpRequest.geraScriptNaPagina();

                request = jasmine.Ajax.requests.mostRecent();
                request.respondWith({ status: 300 });

                expect(document.body.appendChild).not.toHaveBeenCalled();
            });

        });

        describe('função fazRequisicaoBarramentoApiObterAssinaturaInadimplente', function () {

            it('deve chamar o método xhr.open com o parâmetro GET', function () {
                spyOn(XMLHttpRequest.prototype, 'open');
                spyOn(XMLHttpRequest.prototype, 'setRequestHeader');

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente();
                expect(XMLHttpRequest.prototype.open.calls.mostRecent().args[0]).toEqual('GET');
            });

            it('deve chamar o método xhr.open com o parâmetro síncrono', function () {
                spyOn(XMLHttpRequest.prototype, 'open');
                spyOn(XMLHttpRequest.prototype, 'setRequestHeader');

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente();
                expect(XMLHttpRequest.prototype.open.calls.mostRecent().args[2]).toEqual(false);
            });

            it('deve chamar o método xht.setRequestHeader com o parâmetro Accept = application/json', function () {
                spyOn(XMLHttpRequest.prototype, 'setRequestHeader');

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente();
                expect(XMLHttpRequest.prototype.setRequestHeader.calls.first().args[0]).toEqual('Accept');
                expect(XMLHttpRequest.prototype.setRequestHeader.calls.first().args[1]).toEqual('application/json');
            });

            it('deve chamar o método xht.setRequestHeader com o parâmetro Content-Type = application/json', function () {
                spyOn(XMLHttpRequest.prototype, 'setRequestHeader');

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente();
                expect(XMLHttpRequest.prototype.setRequestHeader.calls.mostRecent().args[0]).toEqual('Content-Type');
                expect(XMLHttpRequest.prototype.setRequestHeader.calls.mostRecent().args[1]).toEqual('application/json');
            });

            it('deve chamar o método xhr.send com o parâmetro síncrono', function () {
                spyOn(XMLHttpRequest.prototype, 'send');
                spyOn(XMLHttpRequest.prototype, 'setRequestHeader');

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente();
                expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
            });

            it('deve chamar o método tp.push com os parâmetros "setCustomVariable" e "situacaoPagamento" quando a '
                + 'requisição responde com 200', function () {
                    spyOn(window["tp"], 'push');

                    // mockar a resposta da requisição xhr
                    jasmine.Ajax.stubRequest(
                        '/url-de-teste'
                    ).andReturn({
                        status: 200,
                        responseText: '{"situacaoPagamento":"ok"}'
                    });

                    Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente('/url-de-teste');

                    expect(window["tp"].push).toHaveBeenCalledWith(['setCustomVariable', 'situacaoPagamento', 'ok']);
                });

            it('deve chamar o método Piano.metricas.enviaEventosGA com os parâmetros "Erro" e "Ao obter inadimplente - 401" '
                + 'quando a requisição responde com 401', function () {
                    spyOn(Piano.metricas, 'enviaEventosGA');

                    jasmine.Ajax.stubRequest(
                        '/url-de-teste'
                    ).andReturn({
                        status: 401
                    });

                    Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente('/url-de-teste');
                    expect(Piano.metricas.enviaEventosGA).toHaveBeenCalledWith('Erro', 'Ao obter inadimplente - 401');
                });

            it('deve chamar o método Piano.metricas.enviaEventosGA com os parâmetros "Erro" e "Ao obter inadimplente da API - 400" '
                + 'quando a requisição responde com 400', function () {
                    spyOn(Piano.metricas, 'enviaEventosGA');

                    jasmine.Ajax.stubRequest(
                        '/url-de-teste'
                    ).andReturn({
                        status: 400
                    });

                    Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente('/url-de-teste');
                    expect(Piano.metricas.enviaEventosGA.calls.first().args[0]).toEqual('Erro');
                    expect(Piano.metricas.enviaEventosGA.calls.first().args[1]).toEqual('Ao obter inadimplente da API - 400');
                });

            it('deve chamar o método Piano.metricas.enviaEventosGA duas vezes quando a requisição responde com 400', function () {
                spyOn(Piano.metricas, 'enviaEventosGA');

                jasmine.Ajax.stubRequest(
                    '/url-de-teste'
                ).andReturn(
                    { status: 400 }
                    );

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente('/url-de-teste');
                expect(Piano.metricas.enviaEventosGA.calls.count()).toEqual(2);
            });

        });

        describe('fazRequisicaoBarramentoApiAutorizacaoAcesso', function () {

            var url;

            beforeEach(function () {
                
                spyOn(Piano.variaveis, 'getCodigoProduto').and.returnValue('abc');
                spyOn(Piano.variaveis, 'getServicoId').and.returnValue('0000');

                url = 'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/'+Piano.variaveis.getServicoId()+'/autorizacao-acesso';
            });

            it('deve chamar o método Piano.metricas.enviaEventosGA com os parâmetros "Erro" e '
                + '"Ao obter autorizacao da API - 400 - abc" quando envia "abc" como parâmetro e a requisição retorna 400', function () {
                    spyOn(Piano.metricas, 'enviaEventosGA');

                    jasmine.Ajax.stubRequest(
                        url
                    ).andReturn({
                        status: 400
                    });

                    Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso('abc');

                    expect(Piano.metricas.enviaEventosGA).toHaveBeenCalledWith('Erro', 'Ao obter autorizacao da API - 400 - abc');
            });

            
            it('deve chamar o método Piano.autenticacao.defineUsuarioPiano quando a resposta do barramento for 200', function(){
                spyOn(Piano.autenticacao, "defineUsuarioPiano");

                jasmine.Ajax.stubRequest(
                    url
                ).andReturn({
                    status: 200,
                    responseText: '{"autorizado":true, "motivo":"autorizado", "temTermoDeUso":true}'
                });

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso('abc');
                expect(Piano.autenticacao.defineUsuarioPiano).toHaveBeenCalled();
            });

            it('deve chamar o método Piano.autenticado.defineUsuarioPiano quando a resposta do barramento for 400', function(){
                spyOn(Piano.autenticacao, "defineUsuarioPiano");

                jasmine.Ajax.stubRequest(
                    url
                ).andReturn({
                    status: 400
                });

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso('abc');
                expect(Piano.autenticacao.defineUsuarioPiano).toHaveBeenCalled();
            });


            xit('deve chamar a função saveGloboSubscription quando a função showSaveSubscription retornar true', function(){

            });

            it('deve chamar a função Piano.metricas.setaVariaveis quando o usuario for autorizado', function(){
                jasmine.Ajax.stubRequest(
                    url
                ).andReturn({
                    status: 200,
                    responseText: '{"autorizado":true, "motivo":"autorizado", "temTermoDeUso":true, "usuarioId": "1234-abcd"}'
                });

                spyOn(Piano.metricas, "setaVariaveis");

                Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso();

                expect(Piano.metricas.setaVariaveis).toHaveBeenCalledWith("1234-abcd", "Globo ID", "O Globo");


            });
        });

    });

    describe('Piano.google', function () {

        describe('isAuthorized', function () {
            
            it("deve retornar true quando o usuário tiver entitlements OGlobo", function(){
                swgEntitlements = {getEntitlementForSource: function(){
                    return true;
                }};

                expect(Piano.google.isAuthorized()).toBe(true);
            });


            it("deve retornar true quando o usuário possuir o cookie CREATED_GLOBOID", function(){
                var swgToken = {
                    subscriptionToken : {
                        orderId : 'swgToken'
                    }
                }
                spyOn(swgEntitlements, 'getEntitlementForSource').and.callFake(function(arg){
                    if(arg == "oglobo.globo.com"){
                        return false;
                    }else if(arg == "google"){
                        return swgToken;
                    }
                });
                spyOn(Piano.cookies, "get").and.returnValue(true);
                expect(Piano.google.isAuthorized()).toBe(true);
            });

            it("deve retornar false quando o usuário não possui entitlements OGlobo ou cookie CREATED_GLOBOID", function(){
                swgEntitlements = {getEntitlementForSource: function(){
                    return false;
                }};
                spyOn(Piano.cookies, "get").and.returnValue(false);
                expect(Piano.google.isAuthorized()).toBe(false);
            });

            it("deve chamar o método Piano.metricas.setaVariaveis quando o usuário possuir entitlements OGlobo", function(){
                var swgToken = {
                    subscriptionToken: "token"
                };

                spyOn(swgEntitlements, 'getEntitlementForSource').and.callFake(function(arg){
                    if(arg == "oglobo.globo.com"){
                        return swgToken;
                    }else if(arg == "google"){
                        return false;
                    }
                });
                spyOn(Piano.metricas, "setaVariaveis");
                Piano.google.isAuthorized();
                expect(Piano.metricas.setaVariaveis).toHaveBeenCalledWith("token", "Conta Google", "O Globo");
            });

            it("deve chamar o método Piano.metricas.setaVariaveis quando o usuário possuir o cookie CREATED_GLOBOID", function(){
                var swgToken = {
                    subscriptionToken : {
                        orderId : 'swgToken'
                    }
                };

                spyOn(swgEntitlements, 'getEntitlementForSource').and.callFake(function(arg){
                    if(arg == "oglobo.globo.com"){
                        return false;
                    }else if(arg == "google"){
                        return swgToken;
                    }
                });
                spyOn(Piano.cookies, "get").and.returnValue(true);
                spyOn(Piano.metricas, "setaVariaveis");

                Piano.google.isAuthorized();
                expect(Piano.metricas.setaVariaveis).toHaveBeenCalledWith(true, "Conta Google", "Google");
            });
        });

        describe('isSpecificGoogleUser', function(){
            it('não deve chamar a função isGoogleSubscriber caso o usuário seja autorizado pelo Google', function(){
                oGloboBusiness = {verifyIfUserHasAccessOrDeferred: function() {
                }};
                
                spyOn(Piano.google, "isAuthorized").and.returnValue(true);

                Piano.google.isSpecificGoogleUser();

                spyOn(oGloboBusiness, "verifyIfUserHasAccessOrDeferred");

                expect(oGloboBusiness.verifyIfUserHasAccessOrDeferred).not.toHaveBeenCalled();
                
            });

            xit('deve chamar a função isGoogleSubscriber caso o usuário não seja autorizado pelo Google', function(){
               
            });
        });

        describe("showSaveSubscription", function(){
            it("deve retornar true quando o usuário não tem entitlements E for autorizado E não tem o cookie SAVE_SUBSCRIPTION", function(){
                swgEntitlements = {enablesThis : function(){
                    return false;
                }};
                response = {motivo : 'AUTORIZADO'};

                spyOn(Piano.cookies, "get").and.returnValue(false);
                
                expect(Piano.google.showSaveSubscription(response)).toBe(true);
            });

            it("deve retornar false quando o usuário tem entitlements", function(){
                swgEntitlements = {enablesThis: function(){
                    return true;
                }};

                response = {motivo : 'AUTORIZADO'};

                spyOn(Piano.cookies, "get").and.returnValue(false);
                
                expect(Piano.google.showSaveSubscription(response)).toBe(false);
            });

            it("deve retornar false quando o usuário não for autorizado", function(){
                swgEntitlements = {enablesThis: function(){
                    return false;
                }};

                response = {motivo : 'INEXISTENTE'};

                spyOn(Piano.cookies, "get").and.returnValue(false);
                
                expect(Piano.google.showSaveSubscription(response)).toBe(false);
            });

            it("deve retornar false quando o usuário tiver o cookie SAVE_SUBSCRIPTION", function(){
                swgEntitlements = {enablesThis: function(){
                    return false;
                }};

                response = {motivo : 'AUTORIZADO'};

                spyOn(Piano.cookies, "get").and.returnValue(true);
                
                expect(Piano.google.showSaveSubscription(response)).toBe(false);
            });
        });
    });

});
