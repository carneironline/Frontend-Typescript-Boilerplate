describe('Tiny JS', function () {

    var piano;

    beforeEach(function () {
        piano = Piano;
    });

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
          + 'tem valor "false"',function(){
            expect(piano.autenticacao.isAutorizado(false, '', false, '')).toEqual(false);
        });

        it('deve fazer requisição para o barramento quando autorizado tem valor "true" e hrefAssinaturaInadimplente possui algum valor', function () {
            spyOn(piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente');

            piano.autenticacao.isAutorizado(false, '', true, 'asd');
            expect(piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).toHaveBeenCalled();
        });

        it('não deve fazer requisição para o barramento quando autorizado tem valor "true" e hrefAssinaturaInadimplente não possui valor', function () {
            spyOn(piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente');

            piano.autenticacao.isAutorizado(false, '', true, '');
            expect(piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
        });

        it('não deve fazer requisição para o barramento quando autorizado tem valor "false" e hrefAssinaturaInadimplente possui algum valor', function () {
            spyOn(piano.ajax, 'fazRequisicaoBarramentoApiObterAssinaturaInadimplente');

            piano.autenticacao.isAutorizado(false, '', false, 'asd');
            expect(piano.ajax.fazRequisicaoBarramentoApiObterAssinaturaInadimplente).not.toHaveBeenCalled();
        });

        it('deve chamar o método cookies.get se o usuário não for autorizado', function(){
            spyOn(piano.cookies, 'get');

            piano.autenticacao.isAutorizado(false, '', false, '');
            expect(piano.cookies.get).toHaveBeenCalled();
        });

        it('não deve chamar o método cookies.get se o usuário for autorizado', function(){
            spyOn(piano.cookies, 'get');

            piano.autenticacao.isAutorizado(false, '', true, '');
            expect(piano.cookies.get).not.toHaveBeenCalled();
        });

        // it('deve chamar o método cookies.set quando o usuário não for autorizado e possuir o cookie RTIEX', function(){
            
        //     var a = new Utils();
        //     a.set('_rtiex', 'asd', 1);
        //     // console.log(piano.cookies.get(piano.variaveis.constante.cookie.RTIEX));
        //     // piano.cookies.set(piano.variaveis.constante.cookie.RTIEX, 'asd', 1);
        //     console.log(piano.cookies.get(piano.variaveis.constante.cookie.RTIEX));

        //     // spyOn(piano.cookies, 'set');

        //     // piano.autenticacao.isAutorizado(false, '', false, '');
        //     // expect(piano.cookies.set).toHaveBeenCalled();
        // });

    });


})