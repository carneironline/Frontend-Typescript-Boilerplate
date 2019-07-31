(function (){
    if (!document.getElementById('highlight-sale'))
        return;

    const highlightSale = document.getElementById('highlight-sale');
    const blogSection = document.createElement('section');
    const section = document.createElement('section');
    const divTitle = document.createElement('div');
    const divText = document.createElement('div');
    const buttonImgTag = document.createElement('img');
    const buttonImgUrl = document.createElement('a');
    
    section.setAttribute('id', 'highlight-sale-section');
    divTitle.setAttribute('class','highlight-sale-title' );
    divText.setAttribute('class', 'highlight-sale-text');
    buttonImgUrl.setAttribute('class', 'highlight-sale-button-url')
    buttonImgTag.setAttribute('class', 'highlight-sale-button');

    if (typeof highlightSaleTitle !== 'undefined') {
        highlightSaleTitle ? divTitle.innerHTML = highlightSaleTitle : '';
    } else {
        return;
    }

    if (typeof highlightSaleText !== 'undefined') {
        highlightSaleText ? divText.innerHTML = highlightSaleText : '';
    } else {
        return;
    }

    if (typeof highlightSaleButtonImg !== 'undefined') {
        highlightSaleButtonImg ? buttonImgTag.setAttribute('src', highlightSaleButtonImg) : '';
    } else {
        return;
    }

    if (typeof highlightSaleButtonImgUrl !== 'undefined') {
        highlightSaleButtonImgUrl ? buttonImgUrl.setAttribute('href', highlightSaleButtonImgUrl) : '';
    } else {
        return;
    }

    if(nomeProduto === 'kogut') {
        divTitle.classList.add('highlight-kogut-title');
        divTitle.classList.add('highlight-kogut-text');
    } else if(nomeProduto === 'blogs') {
        section.classList.add('highlight-border');
        section.classList.add('highlight-blogs-section');
        divTitle.classList.add('highlight-kogut-title');
        divTitle.classList.add('highlight-kogut-text');
    }

    section.appendChild(divTitle);
    section.appendChild(divText);
    buttonImgUrl.appendChild(buttonImgTag);
    section.appendChild(buttonImgUrl);
    highlightSale.appendChild(section);
})();


































