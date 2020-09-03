# README

# TinyJS

Biblioteca utilizada para salvar componentes usados pela Piano e suas [experiências](https://github.com/Infoglobo/barreiras-mecanica-piano/wiki).

## Instalação

1. Baixe e instale o [NodeJs](https://nodejs.org/en/) na versão recomendada
2. Faça o download ou clone do projeto
3. Rode o comando `npm install` na raíz do projeto
4. Adicione no arquivo hosts a linha abaixo

```bash
127.0.0.1       tinyjs.globoi.com
```

## Componentes

- [Adblocks](#Adblocks)
- [Banner Bottom Fixed](#BannerBottomFixed)
- [BannersConsumer](#BannersConsumer)
- [Paywall](#Paywall)
- [SubscribeButton](#SubscribeButton)

## <a name="Adblocks"></a>Adblocks

Componente que adiciona a barreira de adblock caso o mesmo esteja ativado no browser do usuário.

### Propriedades do template

```jsx
template: 'default',
assetsPath: '',
description: 'Para ter acesso ilimitado ao nosso conteúdo, basta assinar um dos nossos planos. Aproveite para conhecer todos os benefícios da assinatura O Globo.',
textSignup: 'Quero assinar',
urlSignup: '[https://login.qa.globoi.com/cadastro/4975?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23https%3A%2F%2Fm.globostg.globoi.com%2F](https://login.qa.globoi.com/cadastro/4975?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23https%3A%2F%2Fm.globostg.globoi.com%2F)',
urlSignin: '[https://login.qa.globoi.com/login/4975?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23https%3A%2F%2Fm.globostg.globoi.com%2F](https://login.qa.globoi.com/login/4975?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23https%3A%2F%2Fm.globostg.globoi.com%2F)',
footerTitle: 'Ainda não está pronto para assinar?',
footerDescription: 'Nos adicione em sua lista de permissões ou desabilite seu bloqueador de pop-ups.',
footerTextBtn: 'Saiba mais'
```

### Exemplo de uso na Piano

```jsx
const AdBlockSettings = {
	description: 'Gosta do nosso conteúdo? Você pode contribuir com nosso jornalismo fazendo uma assinatura e aproveitar o jornal O Globo utilizando seu bloqueador.',
	urlSignup: '[http://oglobo.com.br](http://oglobo.com.br/)',
	urlSignin: '[http://google.com.br](http://google.com.br/)'
}

Piano.adblock.mostrarAdBlock(AdBlockSettings);
```

## <a name="BannerBottomFixed"></a>Banner Bottom Fixed

Componente que adiciona um banner flutuando no rodapé da tela.

### Propriedades do template

```jsx
imagePiano: false,
colorBgPiano: '',
linkPiano: ''
```

## Exemplo de uso na Piano

O banner só irá ser exibido se pelo menos a url da imagem for definida

```jsx
const bannerBottomSettings = {
     imagePiano: '//url-completa-da-imagem.com.br'
}

Piano.banner.bottomFixed(bannerBottomSettings);
```

## <a name="BannersConsumer"></a>BannersConsumer

Componente que adiciona um banner em um elemento predefinido.

Propriedades do template padrão

```jsx
{
    selector: 'banner-test', // Essa prop está relacionada ao data-name que estiver no elemento html
    imageDesk: 'https://via.placeholder.com/804x128',
    imageMobi: 'https://via.placeholder.com/300x150',
    url: '#',
    target: '_self', // _self | _blank,
		magazineSubscribeBackground: '#000', // Essa prop só funciona se o seletor for banner-subscribe
}
```

### Exemplo de uso

No HTML é necessário ter um elemento conforme o exemplo abaixo

```jsx
<div class="banner-consumer-cpnt" data-banner-consumer-name='banner-test'></div>
```

O componente identifica o valor informado no atributo **data-name**

### Targets existentes nas revistas

```jsx
data-banner-consumer-name="banner-subscribe"
data-banner-consumer-name="banner-globomais"
```

No runJS da Piano, insira

```jsx
window.glbBannersConsumer = [
    {
        selector: 'banner-test',
        imageDesk: 'https://via.placeholder.com/804x128',
        imageMobi: 'https://via.placeholder.com/300x150',
        url: '//google.com',
        target: '_blank', 
    },
]

window.Piano.components.BannersConsumer()
```

É possível ter múltiplos banners, desde que tenha um HTML para cada seletor

```jsx
window.glbBannersConsumer = [
    {
        selector: 'banner-subscribe',
        imageDesk: 'https://via.placeholder.com/582x473',
        imageMobi: 'https://via.placeholder.com/263x446px',
        magazineSubscribeBackground: '#000',
        url: '//google.com',
        target: '_blank',
    },
    {
        selector: 'banner-globomais',
        imageDesk: 'https://via.placeholder.com/680x59',
        imageMobi: 'https://via.placeholder.com/320x59',
        url: '//google.com',
        target: '_blank',
    },
]

window.Piano.components.BannersConsumer()
```

## <a name="Paywall"></a>Paywall

Componente que adiciona a barreira de venda nas matérias.

### Propriedades do template padrão

```jsx
{
    template: 'default',
    productClass:
        typeof nomeProdutoPiano !== 'undefined'
            ? `paywall-cpt-${window.nomeProdutoPiano}`
            : 'paywall-cpt-oglobo',
    title: 'Esse conteúdo é o título.',
    targetBlank: true,
    topMobi: '',
    topDesk: '',
    topLink: '',
    leftMobi: '',
    leftDesk: '',
    leftLink: '',
    rightMobi: '',
    rightDesk: '',
    rightLink: '',
    middlePreText: '',
    middleText: '',
    middleTextLink: '',
    middleTextColor: '#000',
    hideLogin: false,
    loginText: 'Faça seu login',
    loginPreText: 'Já possui cadastro?',
}
```

### Exemplo de uso na Piano

```jsx
window.glbPaywall = {
    title: 'Quer ler essa matéria? <br> Cadastre-se agora.',
    loginPreText: 'Já é assinante?',
    loginText: 'Faça seu login',
		middlePreText: 'Voltar para a home da ',
		middleText: 'globo.com',
    middleTextLink: '//globo.com',
		middleTextColor: '#0669DE',
    topMobi: 'https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/OGlobo/campanhas/agosto_2019/swg/banner_jornalismoSWG_mob.png',
    topDesk: 'https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/OGlobo/campanhas/agosto_2019/swg/banner_jornalismoSWG_desk.png',
    topLink: encodeURIComponent(window.location.origin + window.location.pathname + '?ofertaSwg=sim'),
    leftMobi: 'https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/OGlobo/campanhas/agosto_2019/swg/register_jornalismoSWG_mob_01.png',
    leftDesk: 'https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/OGlobo/campanhas/agosto_2019/swg/register_jornalismoSWG_desk_01.png',
    leftLink: encodeURIComponent(window.location.origin + window.location.pathname + '?ofertaSwg=sim'),
    rightMobi: 'https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/OGlobo/campanhas/agosto_2019/swg/register_jornalismoSWG_mob_02.png',
    rightDesk: 'https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/OGlobo/campanhas/agosto_2019/swg/register_jornalismoSWG_desk_02.png',
    rightLink: 'https://assinatura.oglobo.globo.com/Default.aspx?id_parc=6236&cod_prod=3140&funcionalidade_id=3981&cod_produto=OG03&tipo_cliente_id=1&campanha=nao&semtelaoferta=sim&utm_origem=siteoglobo&utm_midia=barreiraPaywall&utm_campanha=register_swg&url_retorno=' + encodeURIComponent(window.location.origin + window.location.pathname),
    swg: {
        utms: [
            { name: 'Campanha', value: 'register_swg' },
            { name: 'Midia', value: 'barreiraPaywall' },
            { name: 'Origem', value: 'siteoglobo' }
        ]
    }
};

Piano.paywall.show('register');
```

## <a name="SubscribeButton"></a>SubscribeButton

Este componente é específico para **botões assine já existentes na página**. Ele procura elementos com a classe **subscribe-button-cpnt** e altera suas propriedades.

### Exemplo de uso

No HTML é necessário ter um elemento conforme o exemplo abaixo

```jsx
<a class="subscribe-button-cpnt" data-subscribe-button-name='subscribe-button-one' href="//test.com" >Assine</a>
```

Para a configuração geral (**all**), o componente identifica a classe e para configuração pelo seletor (**items**), é utilizado o informado no atributo **data-name**

### Targets existentes nas revistas

```jsx
data-subscribe-button-name="subscribe-button-one"
data-subscribe-button-name="subscribe-button-two"
data-subscribe-button-name="subscribe-button-three"
```

### Exemplo de uso na Piano

Propriedades aceitas

```jsx
{
    text: 'Assine',
    url: '//google.com',
    target: '_blank',
    rel: 'noopener',
		style: {
        backgroundColor: '#fff000',
        textColor: '#000fff',
    },
}
```

**all**: Define padrões para todos os botões encontrados.

```jsx
all: {
    text: 'Assine',
    url: '//google.com',
    target: '_blank',
}
```

**items**: Define propriedades para determinados botões através do **selector**. Substitui os valores definidos pela propriedade **all**:

```jsx
items: [
    {
        selector: 'subscribe-button-one',
        text: 'Teste 1',
    },
		{
        selector: 'subscribe-button-two',
        text: 'Teste 2',
        style: {
            backgroundColor: '#fff000',
            textColor: '#000fff',
        },
    },
],

```

## Exemplo de uso na Piano

```jsx
window.glbSubscribeButtonOverride = {
    all: {
        text: 'Assine',
        url: '//google.com',
        target: '_blank',
        rel: 'noopener',
    },
    items: [
        {
            selector: 'subscribe-button-one',
            text: 'Teste',
            style: {
                backgroundColor: '#fff000',
                textColor: '#000fff',
            },
        },
    ],
}

window.Piano.components.SubscribeButtonOverride()
```