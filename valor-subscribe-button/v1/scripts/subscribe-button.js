(function (){

    const subscribeDiv = document.querySelector('.header__actions__action.header__subscribe');

    if (!subscribeDiv)
        return;

    const button = document.createElement('a');
    button.setAttribute('target', '_blank');
    button.setAttribute('class', 'subscribe-button-valor');

    if (typeof buttonValorText !== 'undefined') {
        buttonValorText ? button.innerHTML = buttonValorText : '';
    } else {
        return;
    }

    if (typeof buttonValorUrl !== 'undefined') {
        button.setAttribute('href', buttonValorUrl);
    } else {
        return;
    }

    subscribeDiv.innerHTML = button;
})();


































