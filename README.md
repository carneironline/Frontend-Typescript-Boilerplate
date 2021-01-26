# Marketing Components

Aplicação para gerar componentes usados pelo Marketing e Canais digitais nas landing Pages e aplicações similares.

## Tecnologias

- Node
- Typescript

## Instalação

1. Baixe e instale o [NodeJs](https://nodejs.org/en/) na versão recomendada (lts)
2. Faça o download ou clone do projeto
3. Instale o yarn caso não tenha `npm install -g yarn`
4. Rode o comando `yarn` na raíz do projeto
5. Adicione no arquivo hosts a linha abaixo

```
127.0.0.1       marketing-components.globoi.com
```

## Utilização

Essa aplicação é hospedada no **Vault** no container marketing.
**Path**: Containers > marketing > js

Gere o build local rodando o comando

`yarn build:prd`

Acesse a pasta js do vault e faça o upload do arquivo **LPHelpers.js** gerado pelo build.

No html da página que irá utilizar o componente, basta chamar o script:

```jsx
<script defer src="https://s3.glbimg.com/v1/AUTH_d41344b67288452e8cf129d4d5f4447d/marketing/js/LPHelpers.js"></script>
```

# Componentes

Para utilizar os componentes, basta fazer suas respectiva chamadas após o carregamento do script acima, **preferencialmente antes de fechar a tag </body>**

## AddQueryOnLinks

Componente que capta as utms da url e as adiciona como query strings *(variáveis que vem após a ? na url)* em todas as tags A (links) que da página.

### Utilização

```jsx
window.LPHelpers?.addQueryOnLinks()
```

## ChatCpnt

Componente que capta as utms da url e as adiciona como query strings *(variáveis que vem após a ? na url)* em todas as tags A (links) que da página.

### Utilização

```jsx
/* Parâmetros */
// chatID: string;
// bgColor?: string; Opcional
// textColor?: string; Opcional

window.LPHelpers?.chatCpnt({ chatID: '5731a000000GrOU' })
```
