import Helpers from '../Helpers';
import PianoModule from '../Piano';
import GAModule from '../GA';

export default class PaywallGAModule {
  constructor() {
    this.Piano = new PianoModule();
    this.GA = new GAModule(); 

    window.dataLayer = window.dataLayer || [];
    this.debug = window.tinyCpt.debug.paywall;
    this.disabled = false;
    this.metrics = {
        paywall: {}, 
        fb: {
            pixel: {}
        } 
    };

    this.paywallType();
  }

  paywallLoad() { 
    if(!this.Piano.isDefined)
      return;

    const _Piano = this.Piano.content;
    
    this.GA.setEvents(this.metrics.paywall.name, window.Piano.experience.name);
    Helpers.setCookie(_Piano.variaveis.constante.cookie.RTIEX, true, 1);
  }

  trigger(element) { 
    if(this.disabled)
      return;
    
    const resetUtp = element.dataset.gaResetutp || null;
    const imageTop = element.dataset.gaImagePosition;
    const label = (imageTop === 'top') ? element.dataset.gaLabel + this.metrics.paywall.label : element.dataset.gaLabel;

    const data = {
      event: 'EventoGA',
      eventoGACategoria: this.metrics.paywall.name,
      eventoGAAcao: element.dataset.gaAction || action,
      eventoGARotulo: label,
      eventoGAValor: 0,
      eventoGAInteracao: false,
    }; 

    if (resetUtp)
        this.Piano.resetUtp();
 
    this.setDatalayer(data);
  }

  paywallType() {
    const type = ( (typeof window.tinyCpt.Piano !== 'undefined' && typeof window.tinyCpt.Piano.typePaywall !== 'undefined') && window.tinyCpt.Piano.typePaywall) 
      ? window.tinyCpt.Piano.typePaywall.toLowerCase() 
      : 'paywall';

    switch (type) {
      case 'register':
        this.metrics.paywall.name = 'Register comum';
        this.metrics.paywall.label = 'Cadastre-se';
        this.metrics.fb.pixel.name = 'ViewRegisterWall';
        break;
      case 'exclusivo':
        this.metrics.paywall.name = 'Register exclusivo';
        this.metrics.paywall.label = 'Assine agora';
        this.metrics.fb.pixel.name = 'ViewLoginExclusivo';
        break;
      case 'paywall':
        this.metrics.paywall.name = 'paywall';
        this.metrics.paywall.label = 'Assine agora';
        this.metrics.fb.pixel.name = 'ViewPaywallExclusivo';
        break;
    }
  }

  setDatalayer(data = {}) {
    if (Object.keys(data).length) {
      dataLayer.push(data);
    }
  }
}
