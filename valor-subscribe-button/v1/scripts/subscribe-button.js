(function (){

    const subscribeDiv = document.querySelector('.header__actions__action.header__subscribe');

    if (!subscribeDiv)
        return;

    const button = document.createElement('a');
    const buttonImg = document.createElement('img');

    button.setAttribute('target', '_blank');
    // button.setAttribute('class', 'subscribe-button-valor');

    if (typeof buttonValorImg !== 'undefined') {
        buttonImg.setAttribute('src', buttonValorImg);
    } else {
        return;
    }

    if (typeof buttonValorUrl !== 'undefined') {
        button.setAttribute('href', buttonValorUrl);
    } else {
        return;
    }

    button.appendChild(buttonImg);
    subscribeDiv.innerHTML = '';
    subscribeDiv.appendChild(button);
    
})();


































