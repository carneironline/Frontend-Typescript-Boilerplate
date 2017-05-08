window['dataLayer'] = window['dataLayer'] || [];

var EventoGaPiano = {
		
	disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {
		
		if (naoInterativo === false) {
			dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});
		} else if (naoInterativo === true) {
			dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});
		}
		
		if (redirecionaComAtraso) {
			if ((elemento.attr("target") == "blank") || (elemento.attr("rel") == "external" || (elemento.attr("rel") == "nofollow external"))){
				window.open(elemento.attr("href"));
			} else {
				setTimeout(function() {window.location = elemento.attr("href");}, 300);
			}
		}
		
	}	
}


EventoGaPiano.disparaEvento(!0,"Piano","Footer de venda exibido","Capas",!1);
$("#barra-assine .arrow, #barra-assine .barra-inicial, #barra-assine .overlay").click(function(){
var a=$("#barra-assine");
a.toggleClass("open"),
a.is(".open")?EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Expandir",!1):EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Fechar",!1)}),
$("#barra-assine a.buttonBannerFooter.Light").click(function(a){a.preventDefault(),window.open($("#barra-assine a.buttonBannerFooter.Light").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Light",!1)}),
$("#barra-assine a.buttonBannerFooter.Digital").click(function(a){a.preventDefault(),window.open($("#barra-assine a.buttonBannerFooter.Digital").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Digital",!1)}),
$("#barra-assine .line.txt a.saibaMaisLight").click(function(a){a.preventDefault(),window.open($("#barra-assine .line.txt a.saibaMaisLight").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Saiba mais - Light",!1)}),
$("#barra-assine .line.txt a.saibaMaisDigital").click(function(a){a.preventDefault(),window.open($("#barra-assine .line.txt a.saibaMaisDigital").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Saiba mais - Digital",!1)});

$("#barra-assine .panel .leftcol .line big b").text(preco1);
$("#barra-assine .panel .rightcol .line big b").text(preco2);
$("#barra-assine .panel .leftcol .line.txt strong").text(texto1);
$("#barra-assine .panel .rightcol .line.txt strong").text(texto2);
$("#barra-assine .columns .leftcol img").attr("src", linkImg1);
$("#barra-assine .columns .rightcol img").attr("src", linkImg2);
$("#barra-assine .panel .leftcol .line.txt a").attr("href", linkInfo1);
$("#barra-assine .panel .rightcol .line.txt a").attr("href", linkInfo2);
$("#barra-assine .panel .leftcol .line .buttonBannerFooter").attr("href", linkMain1);
$("#barra-assine .panel .rightcol .line .buttonBannerFooter").attr("href", linkMain2);