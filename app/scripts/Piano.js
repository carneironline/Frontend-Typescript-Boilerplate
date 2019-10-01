import Helpers from './Helpers';

export default class Piano {
    constructor() {
        this.debug = window.tinyCpt.debug; 
        this.content = null;
        this.setExperience();
    }

    get isDefined() {
        if(typeof window.tinyCpt !== 'undefined' && typeof window.tinyCpt.Piano !== 'undefined') { 
            this.content = window.tinyCpt.Piano;
            return true;
        } 

        return false;
    }

    setExperience() {  
        let experienceName = '';   
        window.Piano.experience = {};  
         
		if(window.regrasTiny && window.regrasTiny.nomeExperiencia)
			experienceName = window.subsegmentacaoPiano ? `${regrasTiny.nomeExperiencia} - ${window.subsegmentacaoPiano}` : regrasTiny.nomeExperiencia;
        
        if (window.nomeExperiencia) 
			experienceName = window.subsegmentacaoPiano ? `${window.nomeExperiencia} - ${window.subsegmentacaoPiano}` : window.nomeExperiencia;
       
        window.Piano.experience.name = experienceName;
	}

    resetUtp() {
        if(this.isDefined)
            Helpers.setCookie(this.content.variaveis.constante.cookie.UTP, '', -1);
    }
}
