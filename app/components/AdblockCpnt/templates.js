class AdblockCpntTemplates {
    static get(version = null) {
        const data = {}

        switch (version) {
            case 'v1':
                data.style = this.styleV1
                data.html = this.templateV1
                break;
            case 'v2':
                data.style = this.styleV2
                data.html = this.templateV2
                break;
            default:
                data.style = this.styleV1
                data.html = this.templateV1
        }

        return data
    }

    static templateV1(templateSettings) {
        return `
                <div class='adblock-cpnt'>
                    <div class="adblock-cpnt__header">
                            <div class="adblock-cpnt__col1">
                                <img src="${templateSettings.assetsPath}assets/placas.svg" />
                            </div>
                            <div class="adblock-cpnt__col2">
                                <div class="adblock-cpnt__title">
                                    Ops...<br />
                                    Notamos que você utiliza um bloqueador de anúncios.
                                </div>
                                <div class="adblock-cpnt__text">
                                    ${templateSettings.description}
                                </div>
                                <div class="adblock-cpnt__signup"><a href="${templateSettings.urlSignup}" class="adblock-btn" data-ga="Clique em Link - Quero assinar">${templateSettings.textSignup}</a></div>
                                <div class="adblock-cpnt__signin">Já possui assinatura?  <a href="${templateSettings.urlSignin}" data-ga="Clique em Link - Faça login">Faça o login</a></div>
                            </div>
                    </div>

                    <div class="adblock-cpnt__footer">
                        <div class="adblock-cpnt__footer-info">
                            <div>${templateSettings.footerTitle}</div>
                            <div>${templateSettings.footerDescription}</div>
                        </div>

                        <div class="adblock-cpnt__footer-btn">
                            <a id="showRequirements" href="javascript:;" data-ga="Clique em Link - Saiba mais">${templateSettings.footerTextBtn}</a>
                        </div>
                    </div>

                    <div class='adblock-cpnt__requisitos'>
                        <h2>Adicione O Globo nas suas permissões</h2>

                        <h4>Adblock Plus</h4>
                        <ol>
                            <li>Clique no ícone do Adblock Plus, localizado à direita da barra de endereço do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique em “Enabled on this site” para desativar o bloqueio da publicidade</li>
                            <li>Após o clique, o texto será substituído por “Disabled on this site”</li>
                            <li>Recarregue a página que você estava tentando acessar</li>
                        </ol>
                        <h4>AdBlock Pro</h4>
                        <ol>
                            <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique no primeiro ícone (ligar) para para desativar o bloqueio da publicidade</li>
                            <li>Recarregue a página que você estava tentando acessar</li>
                        </ol>
                        <h4>AdBlock</h4>
                        <ol>
                            <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique em “Don’t run on pages on this domain” para desativar o bloqueio da publicidade</li>
                            <li>Uma nova janela abrirá e você precisará clicar no botão “Exclude”</li>
                            <li>Após o clique, a página será recarregada</li>
                        </ol>

                        <button class="adblock-cpnt__requisitos-voltar" type="button">Voltar</button>
                    </div>
                </div>
                <div class='backdrop-adblock'> </div>
            `
    }

    static styleV1() {
        return `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

        #detecta-adblock, #detecta-adblock * {
            box-sizing: border-box;

        }

        #detecta-adblock {
            width: 100%;
            position: fixed;
            height: 100vh;
            z-index: 99999;
            top: 0;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @media only screen and (max-width: 767px) {
            #detecta-adblock {
                padding: 0;
            }
        }

        .adblock-cpnt, .adblock-cpnt * {
            box-sizing: border-box;
        }

        .adblock-cpnt {
            max-width: 960px;
            border-radius: 8px;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
            font-family: 'Raleway';
            z-index: 1;
            background: white;
            overflow: hidden;
            background: #000;
            position: relative;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt {
                width: 100%;
                min-width: unset;
                height: 90vh;
                display: flex;
                flex-direction: column;
                flex-flow: wrap;
                top: calc(50% + 28px);
                overflow: unset;
                position: unset;
            }
        }

        .adblock-cpnt a {
            color: #41BFE2;
        }

        .adblock-cpnt__header {
            padding: 40px 0;
            color: #fff;
            display: flex;
            background-image: radial-gradient(26% 100%, #070F57 41%, #010B36 71%, #010022 96%);
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: 0.04px;
            line-height: 20px;
            position: relative;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__header {
                height: auto;
                text-align: center;
                padding: 0;
            }
        }


        .adblock-cpnt__col1 {
            width: 50%;
            display: flex;
            justify-content: center;
            padding: 0 40px;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__col1 {
                display: none;
            }
        }

        .adblock-cpnt__col1 img {
            display: block;
            max-width: 100%;
            height: auto;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__col1 img {
                width: 130px;
            }
        }

        .adblock-cpnt__col2 {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-right: 40px;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__col2 {
                width: 100%;
                padding: 20px;
            }
        }


        .adblock-cpnt__col2 > div {
            margin-bottom: 15px;
        }

        .adblock-cpnt__title {
            font-weight: 700;
            font-size: 30px;
            color: #FFFFFF;
            letter-spacing: 0.22px;
            line-height: 32px;
        }

        .adblock-cpnt__text {
            font-size: 16px;
            letter-spacing: 0.05px;
        }

        .adblock-cpnt__footer {
            background: #fff;
            display: flex;
            align-items: center;
            padding: 20px 40px;
            width: 100%;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__footer {
                flex-direction: column;
                text-align: center;
                justify-content: center;
                padding: 20px;
            }
        }

        .adblock-cpnt__footer-info {
            font-size: 17px;
            color: #545454;
            letter-spacing: 0.05px;
            line-height: 22px;
            padding-right: 60px;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__footer-info {
                padding-right: 0;
            }
        }

        .adblock-cpnt__footer-info :nth-child(1) {
            font-size: 17px;
            font-weight: 700;
        }

        .adblock-cpnt__footer-info :nth-child(2) {
            font-size: 15px;
        }

        .adblock-cpnt__footer-btn {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 0.06px;
            min-width: 110px;
            text-align: right;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__footer-btn {
                margin-top: 10px;
            }
        }

        .adblock-cpnt__footer-btn a {
            text-decoration: none;
        }


        .adblock-btn {
            display: inline-block;
            background: #41BFE2;
            border-radius: 3px;
            font-weight: 700;
            font-size: 19px;
            color: #FFFFFF !important;
            text-align: center;
            text-decoration: none;
            padding: 10px 20px;
        }

        .adblock-cpnt__requisitos {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            z-index: 1;
            padding: 20px;
            opacity: 0;
            visibility: hidden;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__requisitos {
                overflow-y: scroll;
            }
        }

        .adblock-cpnt__requisitos.is-show {
            opacity: 1;
            visibility: visible;
            animation: opacityUp .2s linear 0s;
            overflow-y: scroll;
        }

        @keyframes opacityUp {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .adblock-cpnt__requisitos h2, .adblock-cpnt__requisitos h4, .adblock-cpnt__requisitos ol {
            margin: 0;
        }

        .adblock-cpnt__requisitos h2 {
            border-bottom: solid 1px rgba(65, 191, 226, .5);
            padding-bottom: 10px;
        }

        .adblock-cpnt__requisitos h4 {
            margin: 20px 0 5px;
        }

        .adblock-cpnt__requisitos h4:first-of-type {
            margin-top: 10px;
        }

        .adblock-cpnt__requisitos ol li {
            margin-bottom: 5px;
        }

        .adblock-cpnt__requisitos-voltar {
            padding: 0;
            border: none;
            position: absolute;
            top: 20px;
            right: 20px;

            background: #41BFE2;
            border-radius: 3px;
            font-weight: 700;
            font-size: 19px;
            color: #FFFFFF;
            text-align: center;
            text-decoration: none;
            padding: 5px 10px;
            cursor: pointer;
        }
        @media only screen and (max-width: 767px) {
            .adblock-cpnt__requisitos-voltar {
                position: relative;
                top: 0;
                left: 0;
                margin-top: 20px;
            }
        }

        #detecta-adblock .backdrop-adblock {
            background: rgba(0, 0, 0, 0.8);
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
        }
        </style>
    `
    }

    static templateV2(templateSettings) {

        const main = 'adblock-cpnt'

        return `
        <div class='${main}'>

            <div class='${main}-main'>
                <div class='${main}-main-image'>
                    <img src="${templateSettings.assetsPath}assets/board.svg" />
                </div>

                <div class='${main}-main-text'>
                    <div class='${main}-main-text__title'>${templateSettings.title}</div>
                    <div class='${main}-main-text__description'>${templateSettings.description}</div>
                    <a href='${templateSettings.btnUrl}' class='${main}-main-text__button'>${templateSettings.btnText}</a>
                </div>
            </div>

            <div class='${main}-readmore'>${templateSettings.footerDescription} <a href="${templateSettings.footerTextBtnUrl}" class="${main}-btn-readmore">${templateSettings.footerTextBtn}</a></div>

        </div>
        `
    }

    static styleV2(templateSettings) {
        const main = '.adblock-cpnt'

        return `
        <style>
        @font-face {
            font-family: 'Futura';
            src: url('${templateSettings.assetsPath}assets/fonts/Futura-Medium.eot');
            src: url('${templateSettings.assetsPath}assets/fonts/Futura-Medium.eot?#iefix') format('embedded-opentype'),
                url('${templateSettings.assetsPath}assets/fonts/Futura-Medium.woff2') format('woff2'),
                url('${templateSettings.assetsPath}assets/fonts/Futura-Medium.woff') format('woff'),
                url('${templateSettings.assetsPath}assets/fonts/Futura-Medium.ttf') format('truetype'),
                url('${templateSettings.assetsPath}assets/fonts/Futura-Medium.svg#Futura-Medium') format('svg');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }

        #detecta-adblock {
            width: 100%;
            position: fixed;
            height: 100vh;
            z-index: 99999;
            top: 0;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000000bd;
            border: solid 1px #121214;
            z-index: 99999999;

        }

        @media only screen and (max-width: 767px) {
            #detecta-adblock {
                padding: 0;
            }
        }

        ${main}, ${main} * {
            box-sizing: border-box;
        }


        ${main} {
            width: 940px;
            font-family: 'Futura';
            background: #fff;
        }

        @media only screen and (max-width: 767px) {
            ${main} {
                width: auto;
                height: 100vh;
                display: flex;
                flex-direction: column;
            }
        }

        ${main}-main {
            width: inherit;
            background: #004F96 0% 0% no-repeat;
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 40px 30px 80px;
        }

        @media only screen and (max-width: 767px) {
            ${main}-main {
                flex: 1;
                flex-direction: column;
                align-items: center;
                padding: 0px 10px 0;
            }
        }

        ${main}-main-image {
            width: 187px;
            height: 189px;
            margin-right: 40px;
            display: table;
        }

        ${main}-main-image img {
            transform: scale(1.8);
        }

        @media only screen and (max-width: 767px) {
            ${main}-main-image {
                width: 107px;
                height: 109px;
                margin-right: unset;
                margin-bottom: 20px;
            }
        }

        ${main}-main-text {

        }

        @media only screen and (max-width: 767px) {
            ${main}-main-text {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        ${main}-main-text__title {
            font-size: 70px;
            margin-left: -4px;
            margin-top: -16px;
            margin-bottom: 30px;
            display: table;
            line-height: 1.1;
        }

        @media only screen and (max-width: 767px) {
            ${main}-main-text__title {
                font-size: 30px;
                text-align: center;
                margin-top: unset;
            }
        }

        ${main}-main-text__description {
            font-size: 36.7px;
            display: table;
            line-height: 1.3;
        }

        @media only screen and (max-width: 767px) {
            ${main}-main-text__description {
                font-size: 16.7px;
                text-align: center;
            }
        }

        ${main}-main-text__button{
            font-size: 38px;
            color: #fff;
            text-transform: uppercase;
            text-decoration: none;
            background: #0293fa;
            padding: 10px 20px;
            border-radius: 4px;
            margin-left: 81px;
            margin-top: 75px;
            display: table;
        }

        @media only screen and (max-width: 767px) {
            ${main}-main-text__button {
                margin-left: unset;
                font-size: 28px;
                margin-top: 25px;
            }
        }

        ${main}-readmore {
            font-size: 26px;
            color: #004F96;
            display: flex;
            justify-content: center;
            padding: 35px 0;
            line-height: 1.3;
        }

        @media only screen and (max-width: 767px) {
            ${main}-readmore {
                flex-direction: column;
                align-items: center;
                padding: 20px;
                text-align: center;
            }
        }

        ${main}-btn-readmore {
            color: #0094FB;
            font-size: 26px;
            text-decoration: underline;
            margin-left: 10px;
        }

        @media only screen and (max-width: 767px) {
            ${main}-btn-readmore {
                margin-left: unset;
                padding-top: 10px;
            }
        }

        </style>
        `
    }

}

export default AdblockCpntTemplates
