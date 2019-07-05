(function (){
    if (document.getElementById('highlight-sale')) {

        const highlightSale = document.getElementById('highlight-sale');
        const section = document.createElement('section');
        const divTitle = document.createElement('div');
        const divText = document.createElement('div');
        const buttonImgTag = document.createElement('img');
        

        section.setAttribute('id', 'highlight-sale-section');
        divTitle.setAttribute('id','highlight-sale-title' );
        divText.setAttribute('class', 'highlight-sale-text');
        buttonImgTag.setAttribute('class', 'highlight-sale-button');

        section.appendChild(divTitle);
        section.appendChild(divText);
        section.appendChild(buttonImgTag);
        highlightSale.innerHTML = section;


    }
})();


































