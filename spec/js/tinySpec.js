describe('Tiny JS', function () {

    var piano;
    var helper;
    var defaultUserAgent;

    beforeEach(function () {
        piano = Piano;
        helper = new Helper();
        defaultUserAgent = navigator.userAgent;
        console.log(defaultUserAgent);
    });

    afterEach(function(){
        console.log(navigator.userAgent);
        helper.setUserAgent(defaultUserAgent);
        console.log(navigator.userAgent);
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

        describe('função isOrigemBuscador', function () {

            it('deve chamar a função tp.push', function () {
                spyOn(window["tp"], 'push');

                piano.util.isOrigemBuscador();
                expect(window["tp"].push).toHaveBeenCalled();
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

        describe('função extraiParametrosCampanhaDaUrl', function () {

            // dificuldade pra alterar o valor de window.location.search
            // dificuldade usar o spy no valoresCampanha

        });

       

    });

});