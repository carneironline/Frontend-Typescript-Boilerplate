(function (){
    if (document.getElementById('highlight-sale')) {

        const highlightSale = document.getElementById('highlight-sale');
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

        highlightSaleTitle ? divTitle.innerHTML = highlightSaleTitle : '';
        highlightSaleText ? divText.innerHTML = highlightSaleText : '';
        highlightSaleButtonImg ? buttonImgTag.setAttribute('src', highlightSaleButtonImg) : '';
        highlightSaleButtonImgUrl ? buttonImgUrl.setAttribute('href', highlightSaleButtonImgUrl) : '';

        section.appendChild(divTitle);
        section.appendChild(divText);
        buttonImgUrl.appendChild(buttonImgTag);
        section.appendChild(buttonImgUrl);
        highlightSale.appendChild(section);


    }
})();


































