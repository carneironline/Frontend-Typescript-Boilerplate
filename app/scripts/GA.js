import ProductsModule from './Products';
import Logs from './Logs';

export default class GA {
  constructor() {
    this.debug = window.tinyCpt.debug.ga;
    this.Products = new ProductsModule();
  }

  setGlobalVars() {
    window.dataLayer = window.dataLayer || [];

    if (this.Products.isProductValor && typeof _gaq === 'undefined')
      window._gaq = window._gaq || [];

  }

  setEvents(action, label, category = 'Piano') {
    if (this.Products.isProductValor)
      _gaq.push(['_trackEvent', category, action, label, , true]);

    dataLayer.push({ 'event': 'EventoGAPiano', 'eventoGACategoria': category, 'eventoGAAcao': action, 'eventoGARotulo': label });

    if(window.tinyCpt.debug.ga) Logs.setLog('GA', 'ga-event', category, action, label);
  }

  setEventsError(action, label, category = 'Piano Erro') {
    if (this.Products.isProductValor)
      _gaq.push(['_trackEvent', category, action, label, , true]);

    dataLayer.push({ 'event': 'EventoGAPiano', 'eventoGACategoria': category, 'eventoGAAcao': action, 'eventoGARotulo': label });

    if(window.tinyCpt.debug.ga) Logs.setLog('GA-Error', 'ga-error', category, action, label);
  }

}