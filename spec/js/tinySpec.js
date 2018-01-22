describe('Tiny JS', function () {

    var helper;
    var defaultUserAgent;

    beforeEach(function () {
        helper = new Helper();
        defaultUserAgent = navigator.userAgent;
    });

    afterEach(function () {
        helper.setUserAgent(defaultUserAgent);
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
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    Piano.autenticacao.isAutorizado(false, '', true, 'asd');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando autorizado tem valor "true" e hrefAssinaturaInadimplente '
                + 'não possui valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    Piano.autenticacao.isAutorizado(false, '', true, '');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando autorizado tem valor "false" e hrefAssinaturaInadimplente '
                + 'possui algum valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente').and.returnValue('');

                    Piano.autenticacao.isAutorizado(false, '', false, 'asd');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
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
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto(undefined).build());

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('deve chamar o método tp.push quarto vezes se glbid é válido e produto é válido', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').build());

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('não deve chamar o método tp.push quando glbid é inválido', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidInvalido').setProduto('produtoValido').build());
                spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

            it('não deve chamar o método tp.push quando glbid é válido, mas produto é inválido', function () {
                spyOn(window["tp"], 'push');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());
                spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(window["tp"].push).not.toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando glbid é inválido', function () {
                spyOn(Piano.cookies, 'set');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidInvalido').setProduto('produtoValido').build());
                spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('deve chamar o método cookies.set quando produto é inválido', function () {
                spyOn(Piano.cookies, 'set');
                spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());
                spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                expect(Piano.cookies.set).toHaveBeenCalled();
            });

            it('deve fazer requisição para o barramento quando não possui o cookie utp mas fazerRequisicaoBarramento '
                + 'possui valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    Piano.variaveis.fazerRequisicaoBarramento = 'asd';

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', '');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando não possui o cookie utp e fazerRequisicaoBarramento '
                + 'não possui valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    Piano.variaveis.fazerRequisicaoBarramento = '';

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', '');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).not.toHaveBeenCalled();
                });

            it('deve fazer requisição para o barramento quando possui utp, mas possui glbid inválido e '
                + 'fazerRequisicaoBarramento possui valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    Piano.variaveis.fazerRequisicaoBarramento = 'asd';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').build());

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidInalido', 'utp');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('deve fazer requisição para o barramento quando possui utp, mas possui produto inválido e '
                + 'fazerRequisicaoBarramento possui valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                    spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    Piano.variaveis.fazerRequisicaoBarramento = 'asd';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando possui utp, mas possui glbid inválido e '
                + 'fazerRequisicaoBarramento não possui valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    Piano.variaveis.fazerRequisicaoBarramento = '';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').build());

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidInalido', 'utp');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).not.toHaveBeenCalled();
                });

            it('não deve fazer requisição para o barramento quando possui utp, mas possui produto inválido e '
                + 'fazerRequisicaoBarramento não possui valor', function () {
                    spyOn(Piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso');
                    spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido');
                    spyOn(Piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                    Piano.variaveis.fazerRequisicaoBarramento = '';
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoInvalido').build());

                    Piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido', 'utp');
                    expect(Piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso).not.toHaveBeenCalled();
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

            // dificuldade usar o spy no valoresCampanha

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

        describe('função detectaAdBlock', function () {

            it('deve chamar a função appendChild', function () {
                spyOn(document.getElementsByTagName("head")[0], 'appendChild');

                Piano.util.detectaAdBlock();
                expect(document.getElementsByTagName("head")[0].appendChild).toHaveBeenCalled();
            });

        });

        describe('função detectaBurlesco', function () {

            // dificuldade para testar funções com window.onload

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

        describe('função trocarConfiguracoes', function () {

            it('deve retornar true quando cookieUtp e cookieUtp.produto são diferentes de undefined e '
                + 'cookieUtp.produto é diferente de getNomeProduto', function () {
                    spyOn(Piano.cookies, 'get').and.returnValue('a');
                    spyOn(window, 'atob').and.returnValue('b');
                    spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setProduto('produto1').build());
                    spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('produto2');

                    expect(Piano.util.trocarConfiguracoes()).toEqual(true);
                });

            it('deve retornar false quando cookieUtp é undefined e isDominioOGlobo é true', function () {
                spyOn(Piano.util, 'isDominioOGlobo').and.returnValue(true);

                expect(Piano.util.trocarConfiguracoes()).toEqual(false);
            });

            it('deve retornar true quando cookieUtp é undefined e isDominioOGlobo é true', function () {
                spyOn(Piano.util, 'isDominioOGlobo').and.returnValue(false);

                expect(Piano.util.trocarConfiguracoes()).toEqual(true);
            });

            it('deve retornar true quando cookieUtp é undefined, isDominioOGlobo é true e '
                + 'getNomeProduto é "jornaldigital"', function () {
                    spyOn(Piano.util, 'isDominioOGlobo').and.returnValue(false);
                    spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('jornaldigital');

                    expect(Piano.util.trocarConfiguracoes()).toEqual(true);
                });

            it('deve retornar true quando cookieUtp é undefined, isDominioOGlobo é true e '
                + 'getNomeProduto é "acervo"', function () {
                    spyOn(Piano.util, 'isDominioOGlobo').and.returnValue(false);
                    spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('acervo');

                    expect(Piano.util.trocarConfiguracoes()).toEqual(true);
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
    });

    describe('Piano.produto', function () {

        describe('função validaConfiguracoes', function () {

            it('deve chamar o método ajax.geraScriptNaPagina quando trocarConfiguracoes possuir algum valor', function () {
                spyOn(Piano.util, 'trocarConfiguracoes').and.returnValue('a');
                spyOn(Piano.ajax, 'geraScriptNaPagina');

                Piano.produto.validaConfiguracoes();
                expect(Piano.ajax.geraScriptNaPagina).toHaveBeenCalled();
            });

            it('deve retornar "true" quando trocarConfiguracoes possuir algum valor', function () {
                spyOn(Piano.util, 'trocarConfiguracoes').and.returnValue('a');

                expect(Piano.produto.validaConfiguracoes()).toEqual(true);
            });

            it('deve retornar "false" quando trocarConfiguracoes não possuir valor', function () {
                spyOn(Piano.util, 'trocarConfiguracoes').and.returnValue('');

                expect(Piano.produto.validaConfiguracoes()).toEqual(false);
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

            it('deve retornar window.servicoIdPiano quando window.servicoIdPiano estiver preenchido', function () {
                window.servicoIdPiano = 'abc';

                expect(Piano.variaveis.getServicoId()).toEqual('abc');
            });

            it('deve retornar 4975 quando window.servicoIdPiano não estiver preenchido', function () {
                window.servicoIdPiano = '';

                expect(Piano.variaveis.getServicoId()).toEqual('4975');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é "acervo"', function () {
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('acervo');

                expect(Piano.variaveis.getServicoId()).toEqual('3981');
            });

            it('deve retornar 3981 quando Piano.variaveis.getNomeProduto() é "jornaldigital"', function () {
                spyOn(Piano.variaveis, 'getNomeProduto').and.returnValue('jornaldigital');

                expect(Piano.variaveis.getServicoId()).toEqual('3981');
            });

        });

    });

    describe('Piano.janelaAnonima', function () {


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
});