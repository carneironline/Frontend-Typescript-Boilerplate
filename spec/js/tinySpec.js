describe('Tiny JS', function () {

    var piano;
    var helper;
    var defaultUserAgent;

    beforeEach(function () {
        piano = Piano;
        helper = new Helper();
        defaultUserAgent = navigator.userAgent;
    });

    afterEach(function () {
        helper.setUserAgent(defaultUserAgent);
    });

    describe('Piano.autenticacao', function () {

        describe('função isAutorizado', function () {

            it('deve autorizar quando autorizado tem valor "true"', function () {
                expect(piano.autenticacao.isAutorizado(false, '', true, '')).toEqual(true);
            });

            it('deve autorizar quando motivo tem valor "indisponivel"', function () {
                expect(piano.autenticacao.isAutorizado(false, 'indisponivel', false, '')).toEqual(true);
            });

            it('deve autorizar quando termoDeUso tem valor "true"', function () {
                expect(piano.autenticacao.isAutorizado(true, '', false, '')).toEqual(true);
            });

            it('não deve autorizar quando autorizado tem valor "false", motivo não tem valor "indisponivel" e termoDeUso '
                + 'tem valor "false"', function () {
                    expect(piano.autenticacao.isAutorizado(false, '', false, '')).toEqual(false);
                });

            it('deve fazer requisição para o barramento quando autorizado tem valor "true" e hrefAssinaturaInadimplente '
                + 'possui algum valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    piano.autenticacao.isAutorizado(false, '', true, 'asd');
                    expect(piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando autorizado tem valor "true" e hrefAssinaturaInadimplente '
                + 'não possui valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    piano.autenticacao.isAutorizado(false, '', true, '');
                    expect(piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando autorizado tem valor "false" e hrefAssinaturaInadimplente '
                + 'possui algum valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    piano.autenticacao.isAutorizado(false, '', false, 'asd');
                    expect(piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
                });

            it('deve chamar o método cookies.get se o usuário não for autorizado', function () {
                spyOn(piano.cookies, 'get');

                piano.autenticacao.isAutorizado(false, '', false, '');
                expect(piano.cookies.get).toHaveBeenCalled();
            });

            it('não deve chamar o método cookies.get se o usuário for autorizado', function () {
                spyOn(piano.cookies, 'get');

                piano.autenticacao.isAutorizado(false, '', true, '');
                expect(piano.cookies.get).not.toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando o usuário não for autorizado e possuir o cookie RTIEX', function () {
                spyOn(piano.cookies, 'get').and.returnValue('asd');
                spyOn(piano.cookies, 'set');

                piano.autenticacao.isAutorizado(false, '', false, '');
                expect(piano.cookies.set).toHaveBeenCalled();
            });

            it('não deve chamar o método cookies.set quando o usuário não for autorizado e não possuir o cookie RTIEX', function () {
                spyOn(piano.cookies, 'set');

                piano.autenticacao.isAutorizado(false, '', false, '');
                expect(piano.cookies.set).not.toHaveBeenCalled();
            });

        });

        describe('função isLogadoCadun', function () {

            it('deve retornar "true" quando glbid não é vazio', function () {
                expect(piano.autenticacao.isLogadoCadun('a', '')).toEqual(true);
            });

            it('deve retornar "false" quando glbid é vazio', function () {
                expect(piano.autenticacao.isLogadoCadun('', '')).toEqual(false);
            });

            it('deve chamar o método cookies.set quando não possui glbid mas possui utp', function () {
                spyOn(piano.cookies, 'set');

                piano.autenticacao.isLogadoCadun('', 'a');
                expect(piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando possui o cookie RTIEX', function () {
                spyOn(piano.cookies, 'get').and.returnValue('asd');
                spyOn(piano.cookies, 'set');

                piano.autenticacao.isLogadoCadun('', '');
                expect(piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set duas vezes quando não possui glbid mas possui utp e o cookie RTIEX', function () {
                spyOn(piano.cookies, 'get').and.returnValue('asd');
                spyOn(piano.cookies, 'set');

                piano.autenticacao.isLogadoCadun('', 'a');
                expect(piano.cookies.set.calls.count()).toEqual(2);
            });

            it('não deve chamar o método cookies.set quando possui glbid', function () {
                spyOn(piano.cookies, 'set');

                piano.autenticacao.isLogadoCadun('a', '');
                expect(piano.cookies.set).not.toHaveBeenCalled();
            });

            it('não deve chamar o método cookies.set quando não possui glbid, utp e o cookie RTIEX', function () {
                spyOn(piano.cookies, 'set');

                piano.autenticacao.isLogadoCadun('', '');
                expect(piano.cookies.set).not.toHaveBeenCalled();
            });
        });

        describe('função verificaUsuarioLogadoNoBarramento', function () {

            it('deve chamar o método tp.push quarto vezes se glbid é válido e produto tem valor "undefined"', function () {
                spyOn(window["tp"], 'push');
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto(undefined).build());

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('deve chamar o método tp.push quarto vezes se glbid é válido e produto é válido', function () {
                spyOn(window["tp"], 'push');
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').build());

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('não deve chamar o método tp.push quando glbid é inválido', function () {
                spyOn(window["tp"], 'push');
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidInvalido').setProduto('produtoValido').build());
                spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

            it('não deve chamar o método tp.push quando glbid é válido, mas produto é inválido', function () {
                spyOn(window["tp"], 'push');
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());
                spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando glbid é inválido', function () {
                spyOn(piano.cookies, 'set');
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidInvalido').setProduto('produtoValido').build());
                spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando produto é inválido', function () {
                spyOn(piano.cookies, 'set');
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());
                spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(piano.cookies.set).toHaveBeenCalled();
            });

            it('deve fazer requisição para o barramento quando não possui o cookie utp mas fazerRequisicaoBarramento '
                + 'possui valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    piano.variaveis.fazerRequisicaoBarramento = 'asd';

                    piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', '');
                    expect(piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando não possui o cookie utp e fazerRequisicaoBarramento '
                + 'não possui valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    piano.variaveis.fazerRequisicaoBarramento = '';

                    piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', '');
                    expect(piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).not.toHaveBeenCalled();
                });

            it('deve fazer requisição para o barramento quando possui utp, mas possui glbid inválido e '
                + 'fazerRequisicaoBarramento possui valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    piano.variaveis.fazerRequisicaoBarramento = 'asd';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').build());

                    piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidInalido', 'utp');
                    expect(piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('deve fazer requisição para o barramento quando possui utp, mas possui produto inválido e '
                + 'fazerRequisicaoBarramento possui valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                    spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    piano.variaveis.fazerRequisicaoBarramento = 'asd';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());

                    piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                    expect(piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando possui utp, mas possui glbid inválido e '
                + 'fazerRequisicaoBarramento não possui valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    piano.variaveis.fazerRequisicaoBarramento = '';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').build());

                    piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidInalido', 'utp');
                    expect(piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).not.toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando possui utp, mas possui produto inválido e '
                + 'fazerRequisicaoBarramento não possui valor', function () {
                    spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                    spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    piano.variaveis.fazerRequisicaoBarramento = '';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());

                    piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                    expect(piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).not.toHaveBeenCalled();
                });

        });
    });

    describe('Piano.util', function () {

        describe('função isSection', function () {

            it('deve retornar true quando tipoConteudoPiano tem valor "section"', function () {
                spyOn(piano.variaveis, 'getTipoConteudoPiano').and.returnValue('section');

                expect(piano.util.isSection()).toEqual(true);
            });

            it('deve retornar false quando tipoConteudoPiano tem valor diferente de "section"', function () {
                spyOn(piano.variaveis, 'getTipoConteudoPiano').and.returnValue('asd');

                expect(piano.util.isSection()).toEqual(false);
            });

        });

        describe('função isTipoConteudoUndefined', function () {

            it('deve chamar o método metricas.enviaEventosGA quando getTipoConteudoPiano igual a undefined', function () {
                spyOn(piano.variaveis, 'getTipoConteudoPiano').and.returnValue(undefined);
                spyOn(piano.metricas, 'enviaEventosGA');

                piano.util.isTipoConteudoUndefined();
                expect(piano.metricas.enviaEventosGA).toHaveBeenCalled();
            });

            it('não deve chamar o método metricas.enviaEventosGA quando getTipoConteudoPiano é diferente de undefined', function () {
                spyOn(piano.variaveis, 'getTipoConteudoPiano').and.returnValue('asd');
                spyOn(piano.metricas, 'enviaEventosGA');

                piano.util.isTipoConteudoUndefined();
                expect(piano.metricas.enviaEventosGA).not.toHaveBeenCalled();
            });
        });

        describe('função extraiParametrosCampanhaDaUrl', function () {

            // dificuldade usar o spy no valoresCampanha

        });

        describe('função isOrigemBuscador', function () {

            it('deve chamar a função tp.push com o parametro false quando userAgent não possui valor "ia_archiver"', function () {
                spyOn(window["tp"], 'push');

                piano.util.isOrigemBuscador();
                expect(window["tp"].push).toHaveBeenCalledWith(["setCustomVariable", "buscador", false]);
            });

            it('deve chamar a função tp.push com o parametro true quando userAgent possui valor "ia_archiver"', function () {
                spyOn(window["tp"], 'push');
                helper.setUserAgent('ia_archiver');

                piano.util.isOrigemBuscador();
                expect(window["tp"].push).toHaveBeenCalledWith(["setCustomVariable", "buscador", true]);
            });

        });

        describe('função montaUrlStg', function () {
            it('deve retornar vazio se ambientePiano possui valor "prd"', function () {
                spyOn(piano.variaveis, 'getAmbientePiano').and.returnValue('prd')

                expect(piano.util.montaUrlStg()).toEqual('');
            });

            it('deve retornar "-stg" se ambientePiano possui valor diferente te "prd"', function () {
                spyOn(piano.variaveis, 'getAmbientePiano').and.returnValue('a')

                expect(piano.util.montaUrlStg()).toEqual('-stg');
            });
        });

        describe('função temParametroNaUrl', function () {

            it('deve retornar true quando recebe um parâmetro existente na url', function () {
                spyOn(piano.util, 'getWindowLocationSearch').and.returnValue('parametroValido');

                expect(piano.util.temParametroNaUrl('parametroValido')).toEqual(true);
            });

            it('deve retornar false quando recebe um parâmetro não existente na url', function () {
                spyOn(piano.util, 'getWindowLocationSearch').and.returnValue('parametroValido');

                expect(piano.util.temParametroNaUrl('parametroInvalido')).toEqual(false);
            });

        });

        describe('função getValorParametroNaUrl', function () {

            it('deve retornar o valor do parâemtro informado na url', function () {
                spyOn(piano.util, 'temParametroNaUrl').and.returnValue(true);
                spyOn(piano.util, 'getWindowLocationSearch').and.returnValue('?parametro=valor');

                expect(piano.util.getValorParametroNaUrl('parametro')).toEqual('valor')
            });

            it('deve retornar "sem parametro" caso não tenha parâmetro', function () {
                spyOn(piano.util, 'temParametroNaUrl').and.returnValue(false);

                expect(piano.util.getValorParametroNaUrl('')).toEqual('sem parametro');
            });

        });

        describe('função isDebug', function () {

            it('deve retornar true quando o parâmetro possui valor "true"', function () {
                spyOn(piano.util, 'getValorParametroNaUrl').and.returnValue('true');

                expect(piano.util.isDebug()).toEqual(true);
            });

            it('deve retornar false quando o parâmetro possui valor "false"', function () {
                spyOn(piano.util, 'getValorParametroNaUrl').and.returnValue('false');

                expect(piano.util.isDebug()).toEqual(false);
            });

            it('deve retornar true quando possui o cookie "debug-piano"', function () {
                spyOn(piano.util, 'getValorParametroNaUrl').and.returnValue('a');
                spyOn(piano.cookies, 'get').and.returnValue('debug-piano');

                expect(piano.util.isDebug()).toEqual(true);
            });

        });

        describe('função detectaAdBlock', function () {

            it('deve chamar a função appendChild', function () {
                spyOn(document.getElementsByTagName("head")[0], 'appendChild');

                piano.util.detectaAdBlock();
                expect(document.getElementsByTagName("head")[0].appendChild).toHaveBeenCalled();
            });

        });

        describe('função detectaBurlesco', function () {

            // dificuldade para testar funções com window.onload

        });

        describe('função isDominioOGlobo', function () {

            it('deve retornar a url acessada quando acessar uma url que possui "oglobo"', function () {
                spyOn(piano.util, 'getWindowLocationHref').and.returnValue('https://oglobo.com/');

                expect(piano.util.isDominioOGlobo()).toEqual('oglobo.com');
            });

            it('deve retornar a url acessada quando acessar uma url que possui "globoi"', function () {
                spyOn(piano.util, 'getWindowLocationHref').and.returnValue('https://globoi.com/');

                expect(piano.util.isDominioOGlobo()).toEqual('globoi.com');
            });

            it('deve retornar "" quando acessar uma url que possui "edg" e "globoi"', function () {
                spyOn(piano.util, 'getWindowLocationHref').and.returnValue('https://edg.globoi.com/');

                expect(piano.util.isDominioOGlobo()).toEqual('');
            });

            it('deve retornar "" quando acessar uma url que não possui "oglobo" e nem "globoi"', function () {
                spyOn(piano.util, 'getWindowLocationHref').and.returnValue('https://google.com/');

                expect(piano.util.isDominioOGlobo()).toEqual('');
            });

        });

        describe('função trocarConfiguracoes', function () {

            it('deve retornar true quando cookieUtp e cookieUtp.produto são diferentes de undefined e '
                + 'cookieUtp.produto é diferente de getNomeProduto', function () {
                    spyOn(piano.cookies, 'get').and.returnValue('a');
                    spyOn(window, 'atob').and.returnValue('b');
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setProduto('produto1').build());
                    spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produto2');

                    expect(piano.util.trocarConfiguracoes()).toEqual(true);
                });

            it('deve retornar false quando cookieUtp é undefined e isDominioOGlobo é true', function () {
                spyOn(piano.util, 'isDominioOGlobo').and.returnValue(true);

                expect(piano.util.trocarConfiguracoes()).toEqual(false);
            });

            it('deve retornar true quando cookieUtp é undefined e isDominioOGlobo é true', function () {
                spyOn(piano.util, 'isDominioOGlobo').and.returnValue(false);

                expect(piano.util.trocarConfiguracoes()).toEqual(true);
            });

            it('deve retornar true quando cookieUtp é undefined, isDominioOGlobo é true e '
                + 'getNomeProduto é "jornaldigital"', function () {
                    spyOn(piano.util, 'isDominioOGlobo').and.returnValue(false);
                    spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('jornaldigital');

                    expect(piano.util.trocarConfiguracoes()).toEqual(true);
                });

            it('deve retornar true quando cookieUtp é undefined, isDominioOGlobo é true e '
                + 'getNomeProduto é "acervo"', function () {
                    spyOn(piano.util, 'isDominioOGlobo').and.returnValue(false);
                    spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('acervo');

                    expect(piano.util.trocarConfiguracoes()).toEqual(true);
                });

        });

        describe('função callbackMeter', function () {

            it('deve chamar o método metricas.executaAposPageview sem nenhum parâmetro', function () {
                spyOn(piano.metricas, 'executaAposPageview');

                piano.util.callbackMeter();
                expect(piano.metricas.executaAposPageview).toHaveBeenCalledWith();
            });

        });

        describe('função callbackMeterExpired', function () {

            it('deve chamar o método metricas.executaAposPageview com o valor true no parâmetro', function () {
                spyOn(piano.metricas, 'executaAposPageview');

                piano.util.callbackMeterExpired();
                expect(piano.metricas.executaAposPageview).toHaveBeenCalledWith(true);
            });

        });
    });

    describe('Piano.produto', function () {

        describe('função validaConfiguracoes', function () {

            it('deve chamar o método ajax.geraScriptNaPagina quando trocarConfiguracoes possuir algum valor', function () {
                spyOn(piano.util, 'trocarConfiguracoes').and.returnValue('a');
                spyOn(piano.ajax, 'geraScriptNaPagina');

                piano.produto.validaConfiguracoes();
                expect(piano.ajax.geraScriptNaPagina).toHaveBeenCalled();
            });

            it('deve retornar "true" quando trocarConfiguracoes possuir algum valor', function () {
                spyOn(piano.util, 'trocarConfiguracoes').and.returnValue('a');

                expect(piano.produto.validaConfiguracoes()).toEqual(true);
            });

            it('deve retornar "false" quando trocarConfiguracoes não possuir valor', function () {
                spyOn(piano.util, 'trocarConfiguracoes').and.returnValue('');

                expect(piano.produto.validaConfiguracoes()).toEqual(false);
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
                    spyOn(piano.util, 'getValorParametroNaUrl').and.returnValue('int');
                    spyOn(piano.cookies, 'set');

                    piano.variaveis.getAmbientePiano();
                    expect(piano.cookies.set.calls.count()).toEqual(1);
                });

            it('deve retornar o valor do parâmetro  "ambiente-desejado"', function () {
                spyOn(piano.util, 'getValorParametroNaUrl').and.returnValue('int');

                expect(piano.variaveis.getAmbientePiano()).toEqual('int');
            });

            it('deve remover o cookie "ambientePiano" quando o parâmetro "ambiente-desejado" possui o valor "false"', function () {
                spyOn(piano.util, 'getValorParametroNaUrl').and.returnValue('false');
                spyOn(piano.cookies, 'set');

                piano.variaveis.getAmbientePiano();
                expect(piano.cookies.set).toHaveBeenCalledWith(piano.variaveis.constante.cookie.AMBIENTE, "", -1);
            });

            it('deve retornar o valor do cookie "ambientePiano" quando ele existir e não possuir o parâmetro '
                + '"ambiente-desejado" na url', function () {
                    spyOn(piano.cookies, 'get').and.returnValue('a');

                    expect(piano.variaveis.getAmbientePiano()).toEqual('a');
                });

            it('deve retornar window.ambienteUtilizadoPiano quando não possuir o valor na url "ambiente-desejado", '
                + ' nem possuir o cookie "ambientePiano" e window.ambienteUtilizadoPiano tem o valor "int"', function () {
                    window.ambienteUtilizadoPiano = 'int';

                    expect(piano.variaveis.getAmbientePiano()).toEqual('int');
                });

            it('deve retornar "prd" quando não possuir o valor na url "ambiente-desejado", '
                + ' nem possuir o cookie "ambientePiano" e window.ambienteUtilizadoPiano tem o valor "abc"', function () {
                    window.ambienteUtilizadoPiano = 'abc';

                    expect(piano.variaveis.getAmbientePiano()).toEqual('prd');
                });

        });

        describe('função executouPageview', function () {

            it('deve retornar "true" quando  window.executouPageview é "true"', function () {
                window.executouPageview = true;

                expect(piano.variaveis.executouPageview()).toEqual(true);
            });

            it('deve retornar "false" quando  window.executouPageview é "false"', function () {
                window.executouPageview = false;

                expect(piano.variaveis.executouPageview()).toEqual(false);
            });

        });

        describe('função getServicoId', function () {

            it('deve retornar window.servicoIdPiano quando window.servicoIdPiano estiver preenchido', function () {
                window.servicoIdPiano = 'abc';

                expect(piano.variaveis.getServicoId()).toEqual('abc');
            });

            it('deve retornar 4975 quando window.servicoIdPiano não estiver preenchido', function () {
                window.servicoIdPiano = '';

                expect(piano.variaveis.getServicoId()).toEqual('4975');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é "acervo"', function () {
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('acervo');

                expect(piano.variaveis.getServicoId()).toEqual('3981');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é "jornaldigital"', function () {
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('jornaldigital');

                expect(piano.variaveis.getServicoId()).toEqual('3981');
            });

        });

    });
});