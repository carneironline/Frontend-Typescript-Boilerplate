describe('Tiny JS', function () {

    var piano;

    beforeEach(function () {
        piano = Piano;
    });

    describe('Piano.autenticação', function () {

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
                spyOn(window, 'atob').and.returnValue('');
                spyOn(window, 'decodeURI').and.returnValue('');
                
                spyOn(window["tp"], 'push');
                
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto(undefined).build());

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido','utp');
                
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('deve chamar o método tp.push quarto vezes se glbid é válido e produto é válido', function () {
                spyOn(window, 'atob').and.returnValue('');
                spyOn(window, 'decodeURI').and.returnValue('');

                spyOn(window["tp"], 'push');
                
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido')
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidValido').setProduto('produtoValido').build());

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido','utp');
                
                expect(window["tp"].push.calls.count()).toEqual(4);
            });

            it('não deve chamar o método tp.push quando glbid é inválido', function () {
                spyOn(window, 'atob').and.returnValue('');
                spyOn(window, 'decodeURI').and.returnValue('');

                spyOn(window["tp"], 'push');
                
                spyOn(piano.autenticacao, 'isLogadoCadun').and.returnValue(true);
                spyOn(piano.variaveis, 'getNomeProduto').and.returnValue('produtoValido')
                spyOn(JSON, 'parse').and.returnValue(new LeitorBuilder().setGlbid('glbidInvalido').setProduto('produtoValido').build());
                spyOn(piano.ajax, 'fazRequisicaoBarramentoApiAutorizacaoAcesso').and.returnValue('');

                piano.autenticacao.verificaUsuarioLogadoNoBarramento('glbidValido','utp');
                
                expect(window["tp"].push).not.toHaveBeenCalled();
            });
            

        });
    });
});