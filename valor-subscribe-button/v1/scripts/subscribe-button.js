(function (){

    const subscribeDiv = document.querySelector('.header__actions__action.header__subscribe');
    const imageValue = (typeof buttonValorImg !== 'undefined' && Boolean(buttonValorImg.trim())) ? true : false;
    const urlValue = (typeof buttonValorUrl !== 'undefined' && Boolean(buttonValorUrl.trim())) ? true : false;
    const button = document.createElement('a');
    const buttonImg = document.createElement('img');

    if (!subscribeDiv || !imageValue || !urlValue)
        return;

    button.setAttribute('target', '_blank');
    buttonImg.setAttribute('src', imageValue);
    button.setAttribute('href', urlValue);

    subscribeDiv.innerHTML = '';
    button.appendChild(buttonImg);
    subscribeDiv.appendChild(button);
})();



























