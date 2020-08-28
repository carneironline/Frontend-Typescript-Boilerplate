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

- [Adblocks](https://www.notion.so/README-d7fa91987acb4fc6b5737faf824efe10#574d97bf50c04a92ae2ebd1b194641eb)
- [Banner Bottom Fixed](https://www.notion.so/README-d7fa91987acb4fc6b5737faf824efe10#729c0282d3914749bfa091cd3da5786a)
- [Paywall](https://www.notion.so/README-d7fa91987acb4fc6b5737faf824efe10#c33e8b5af66e4a18b3610ac05c5bb3c5)

## Adblocks

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

## Banner Bottom Fixed

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

## Paywall

### Exemplo de uso na Piano

```jsx
window.glbPaywall = {
    title: 'Quer ler essa matéria? <br> Cadastre-se agora.',
    loginPreText: 'Já é assinante?',
    loginText: 'Faça seu login',
		middleText: 'Lorem ipsum dollor si amet',
    middleTextLink: '//google.com',
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