!function(){return function t(e,a,i){function n(l,r){if(!a[l]){if(!e[l]){var s="function"==typeof require&&require;if(!r&&s)return s(l,!0);if(o)return o(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var d=a[l]={exports:{}};e[l][0].call(d.exports,function(t){return n(e[l][1][t]||t)},d,d.exports,t,e,a,i)}return a[l].exports}for(var o="function"==typeof require&&require,l=0;l<i.length;l++)n(i[l]);return n}}()({1:[function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=!1,this.disabled=!1,this.fb=e}var e,a,n;return e=t,(a=[{key:"setPixelType",value:function(){if(!this.disabled){var t=void 0!==this.fb.pixel.name?this.fb.pixel.name:null;this.isDefined&&t&&(fbq("init","410270039520634"),fbq("trackSingle","410270039520634",this.fb.pixel.name))}}},{key:"isDefined",get:function(){return"undefined"!=typeof fbq}}])&&i(e.prototype,a),n&&i(e,n),t}();a.default=n},{}],2:[function(t,e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=(i=t("./piano-module"))&&i.__esModule?i:{default:i};function o(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),window.dataLayer=window.dataLayer||[],this.debug=!1,this.disabled=!1,this.Piano=new n.default,this.metrics={paywall:{},fb:{pixel:{}}},this.paywallType()}var e,a,i;return e=t,(a=[{key:"paywallLoad",value:function(){if(this.Piano.isDefined){var t=this.Piano.content;"register"===t.typePaywall||"exclusivo"===t.typePaywall?(t.metricas.enviaEventosGA("Exibicao ".concat(t.typePaywall),t.metricas.montaRotuloGA()),t.cookies.set(t.variaveis.constante.cookie.RTIEX,!0,1)):t.metricas.enviaEventosGA("Barreira",t.metricas.montaRotuloGA())}}},{key:"trigger",value:function(t){if(!this.disabled){var e=t.dataset.gaResetutp||null,a="top"===t.dataset.gaImagePosition?t.dataset.gaLabel+this.metrics.paywall.label:t.dataset.gaLabel,i={event:"EventoGA",eventoGACategoria:this.metrics.paywall.name,eventoGAAcao:t.dataset.gaAction||action,eventoGARotulo:a,eventoGAValor:0,eventoGAInteracao:!1};e&&this.Piano.resetUtp(),this.setDatalayer(i)}}},{key:"paywallType",value:function(){switch(this.Piano.isDefined?this.Piano.content.typePaywall:"paywall"){case"register":this.metrics.paywall.name="Register comum",this.metrics.paywall.label="Cadastre-se",this.metrics.fb.pixel.name="ViewRegisterWall";break;case"exclusivo":this.metrics.paywall.name="Register exclusivo",this.metrics.paywall.label="Assine agora",this.metrics.fb.pixel.name="ViewLoginExclusivo";break;case"paywall":this.metrics.paywall.name="paywall",this.metrics.paywall.label="Assine agora",this.metrics.fb.pixel.name="ViewPaywallExclusivo"}}},{key:"setDatalayer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(t).length&&dataLayer.push(t)}}])&&o(e.prototype,a),i&&o(e,i),t}();a.default=l},{"./piano-module":5}],3:[function(t,e,a){"use strict";var i;new(((i=t("./paywall-module"))&&i.__esModule?i:{default:i}).default)},{"./paywall-module":4}],4:[function(t,e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(t("./piano-module")),n=r(t("./ga-module")),o=r(t("./swg-module")),l=r(t("./fb-module"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.Piano=new i.default,this.GA=new n.default,this.SWG=new o.default,this.FB=new l.default(this.GA.metrics.fb),this.debug=!1,this.domain="prd"==window.ambienteUtilizadoPiano?"https://login.globo.com/":"https://login.qa.globoi.com/",this.setTemplateSettings(function(){e.init()}),window.PaywallCpt=this}var e,a,r;return e=t,(a=[{key:"setTemplateSettings",value:function(t){var e={template:"default",assetsPath:"",display:null,productClass:"undefined"!=typeof nomeProdutoPiano?"paywall-cpt-".concat(nomeProdutoPiano):"paywall-cpt-oglobo",title:"Esse conteúdo é o título.",targetBlank:!0,topMobi:"",topDesk:"",topLink:"",leftMobi:"",leftDesk:"",leftLink:"",rightMobi:"",rightDesk:"",rightLink:"",hideLoginArea:!1,loginText:"Faça login",loginPreText:"Já possui cadastro?"};window.glbPaywall=window.glbPaywall?Object.assign({},e,window.glbPaywall):e,window.glbPaywall.loginTag="".concat(window.glbPaywall.loginPreText,' <a href="').concat(this.getUrlLoginRegister(),'" data-is-login="true" data-ga-action="Clique em link" data-ga-label="Link 2 - Faça login" data-ga-resetUtp="false" data-href-target=" ').concat(window.glbPaywall.targetBlank,' ">').concat(window.glbPaywall.loginText,"</a>"),window.glbPaywall.hideLoginArea&&this.clearLoginArea(),this.debug&&this.setDebugTemplateSettings(),t()}},{key:"clearLoginArea",value:function(){window.glbPaywall&&(window.glbPaywall.loginTag="")}},{key:"setDebugTemplateSettings",value:function(){var t={topMobi:"https://via.placeholder.com/300x150",topDesk:"https://via.placeholder.com/804x128",topLink:"https://google.com?l1",leftMobi:"https://via.placeholder.com/300x500",leftDesk:"https://via.placeholder.com/402x515",leftLink:"https://google.com?l2",rightMobi:"https://via.placeholder.com/300x500",rightDesk:"https://via.placeholder.com/402x515",rightLink:"https://google.com?l3"};window.glbPaywall=Object.assign({},window.glbPaywall,t)}},{key:"bodyAdjust",value:function(){this.elBody.style.setProperty("overflow","hidden","important"),this.elBody.style.setProperty("position","fixed","important"),this.elBody.style.setProperty("width","100%","important")}},{key:"setElWrapper",value:function(){this.elCpt=document.querySelector(".paywall-cpt")}},{key:"removeElements",value:function(){this.setElWrapper(),this.elCpt&&this.elCpt.remove(),document.querySelectorAll(".protected-content").forEach(function(t){t.remove()})}},{key:"createTemplate",value:function(){var t=this;this.elBody=document.body,this.bodyAdjust(),this.removeElements(),this.elBody.insertAdjacentHTML("beforeend",this.cssMinified),this.elBody.insertAdjacentHTML("beforeend",this.template),this.activeTemplateSettings(),window.matchMedia("(min-width: 1024px)").matches&&window.addEventListener("resize",function(){t.activeTemplateSettings()}),this.GA.paywallLoad()}},{key:"activeTemplateSettings",value:function(){var t=this;this.setElWrapper(),this.elCptWrap=this.elCpt.querySelector(".paywall-cpt-wrap"),setTimeout(function(){var e=window.innerHeight+4,a=t.elCptWrap.offsetHeight,i=(window.matchMedia("(min-width: 1024px)").matches,Math.abs(e/2)),n=e-a;t.elCpt.style.top="".concat(i,"px"),t.elCpt.style.opacity=1,t.elCpt.style.zIndex=9999999999,t.evtWheel(i,n),t.evtTouch(i,n),t.activeEvents(),t.FB.setPixelType()},1e3)}},{key:"activeEvents",value:function(){var t=this;this.elCptWrap.querySelectorAll("a").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var a=Boolean(e.dataset.isLogin)||null,i=e.href||null,n=e.dataset.hrefTarget||!0;a||this.SWG.callSubscribe(),this.GA.trigger(e),i&&setTimeout(function(){n?window.location.href=i:window.open(i)},300)}.bind(t))})}},{key:"evtWheel",value:function(t,e){var a=t;window.addEventListener("wheel",function(i){var n=t/100;if(i.deltaY>=1){var o=a-20*n;a=o<e?e:o,this.elCpt.style.top="".concat(a,"px")}if(i.deltaY<=-1){var l=a+20*n;a=l>t?t:l,this.elCpt.style.top="".concat(a,"px")}}.bind(this))}},{key:"evtTouch",value:function(t,e){var a=t,i=0,n=0;window.addEventListener("touchstart",function(t){i=t.changedTouches[0].screenY}),window.addEventListener("touchmove",function(o){if((n=o.changedTouches[0].screenY)<i){var l=Math.abs(i)-Math.abs(n),r=a-l;a=r<e?e:r,this.elCpt.style.top="".concat(a,"px")}if(n>i){var s=a+(n-i);a=s>t?t:s,this.elCpt.style.top="".concat(a,"px")}}.bind(this))}},{key:"getUrlLoginRegister",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="prd"===window.ambienteUtilizadoPiano?"https://assinatura.oglobo.globo.com/ValidaUsuarioBarramento.html":"https://assinatura.globostg.globoi.com/ValidaUsuarioBarramento.html",a=location.href,i="",n="";return!this.debug&&this.Piano.isDefined&&(n=encodeURIComponent(e+"?codigoProduto="+this.Piano.content.variaveis.getCodigoProduto()+"&serviceId="+this.Piano.content.variaveis.getServicoId()+"&ambienteUtilizado="+window.ambienteUtilizadoPiano+"&nomeProduto="+this.Piano.content.variaveis.getNomeProduto()+"&urlRetorno="+a),i="register"===t?"".concat(this.domain,"cadastro/").concat(this.Piano.content.variaveis.getServicoId(),"?url=").concat(n):"".concat(this.domain,"login/").concat(this.Piano.content.variaveis.getServicoId(),"?url=").concat(n)),i}},{key:"init",value:function(){this.createTemplate()}},{key:"templateVars",get:function(){return window.glbPaywall}},{key:"template",get:function(){return'\n\t  <div class="paywall-cpt '.concat(this.templateVars.productClass,'"> \n\t\t<div class="paywall-cpt-wrap">\n\t\t<div class="paywall-cpt-wrap__text-head">\n\t\t\t').concat(this.templateVars.title,'\n\t\t</div>\n\t\t  <div class="paywall-cpt-wrap__top">\n\t\t  \t<a href="').concat(this.templateVars.topLink,'" data-ga-image-position="top" data-ga-action="Clique em link" data-ga-label="Link 1 -" data-ga-resetUtp="true" data-href-target="').concat(this.templateVars.targetBlank,'">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset="').concat(this.templateVars.topMobi,'" media="(max-width: 1023px)">\n\t\t\t\t\t<source srcset="').concat(this.templateVars.topDesk,'" media="(min-width: 1024px)">\n\t\t\t\t\t<img src="').concat(this.templateVars.topMobi,'" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class="paywall-cpt-wrap__text-center ').concat(window.glbPaywall.hideLoginArea?"is-hide":"",'">\n\t\t  \t').concat(this.templateVars.loginTag,'\n\t\t  </div>\n\t\t  <div class="paywall-cpt-wrap__left">\n\t\t  \t<a href="').concat(this.templateVars.leftLink,'" data-ga-action="Clique em link" data-ga-label="Link 4 - Banner oferta esquerda" data-ga-resetUtp="true" data-href-target="').concat(this.templateVars.targetBlank,'">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset="').concat(this.templateVars.leftMobi,'" media="(max-width: 1023px)">\n\t\t\t\t\t<source srcset="').concat(this.templateVars.leftDesk,'" media="(min-width: 1024px)">\n\t\t\t\t\t<img src="').concat(this.templateVars.leftMobi,'" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class="paywall-cpt-wrap__right">\n\t\t  \t<a href="').concat(this.templateVars.rightLink,'"  data-ga-action="Clique em link" data-ga-label="Link 5 - Banner oferta direita" data-ga-resetUtp="true" data-href-target="').concat(this.templateVars.targetBlank,'">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset="').concat(this.templateVars.rightMobi,'" media="(max-width: 1023px)">\n\t\t\t\t\t<source srcset="').concat(this.templateVars.rightDesk,'" media="(min-width: 1024px)">\n\t\t\t\t\t<img src="').concat(this.templateVars.rightMobi,'" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t  ')}},{key:"cssMinified",get:function(){return"<style>\n\t  .paywall-cpt{opacity:0;position:fixed;bottom:0;left:0;width:100vw;overflow:hidden;background:#fff;-webkit-box-shadow:0 0 70px 0 rgba(0,0,0,.5);box-shadow:0 0 70px 0 rgba(0,0,0,.5);font-family:Arial,Helvetica,sans-serif}.paywall-cpt,.paywall-cpt *{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .2s ease;transition:all .2s ease}.paywall-cpt a{font-weight:700;text-decoration:none}.paywall-cpt a:hover{text-decoration:underline}.paywall-cpt .paywall-cpt-wrap__text-head,.paywall-cpt a{color:#000}.paywall-cpt-oglobo .paywall-cpt-wrap__text-head,.paywall-cpt-oglobo a{color:#325e94}.paywall-cpt-wrap{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:20px}@media screen and (min-width:1024px){.paywall-cpt-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.paywall-cpt-wrap img{display:block;max-width:100%;height:auto}.paywall-cpt-wrap__top{padding-top:20px}.paywall-cpt-wrap__text-head{width:100%;text-align:center;padding:20px 0 0;font-size:20px;font-weight:700}.paywall-cpt-wrap__text-center{width:100%;text-align:center;padding:20px 0;color:#767676;font-size:16px}.paywall-cpt-wrap__text-center.is-hide{padding-bottom:0}\n\t  </style>"}}])&&s(e.prototype,a),r&&s(e,r),t}();a.default=c},{"./fb-module":1,"./ga-module":2,"./piano-module":5,"./swg-module":6}],5:[function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=!1,this.content=null}var e,a,n;return e=t,(a=[{key:"resetUtp",value:function(){this.isDefined&&this.content.cookies.set(this.content.variaveis.constante.cookie.UTP,"",-1)}},{key:"isDefined",get:function(){return"undefined"!=typeof Piano&&(this.content=Piano,!0)}}])&&i(e.prototype,a),n&&i(e,n),t}();a.default=n},{}],6:[function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=!1,this.disabled=!1,this.content=null}var e,a,n;return e=t,(a=[{key:"callSubscribe",value:function(){if(!this.disabled){var t=void 0!==t?t:null,e="undefined"!=typeof utmCampanha?utmCampanha:null,a="undefined"!=typeof utmMidia?utmMidia:null,i="undefined"!=typeof utmOrigem?utmOrigem:null;this.isDefined&&(e&&t&&t.set("utm_campanha",utmCampanha),a&&t&&t.set("utm_midia",utmMidia),i&&t&&t.set("utm_origem",utmOrigem),this.content.subscribe("br.com.infoglobo.oglobo.swg.google"))}}},{key:"isDefined",get:function(){return"undefined"!=typeof swg&&(this.content=swg,!0)}}])&&i(e.prototype,a),n&&i(e,n),t}();a.default=n},{}]},{},[3]);