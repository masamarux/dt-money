# ![logo](https://user-images.githubusercontent.com/45273884/196594364-abdecdf6-71b2-4137-94b1-b0ec88234337.svg) DT Money

![Code_9idsjDL8us](https://user-images.githubusercontent.com/45273884/196603420-d062beb9-c66f-443a-acbe-ae96600d617f.gif)

## Descrição

Este é DT Money, ele é um projeto desafio feito durante as aulas do 3 modulo de React da Rocketseat, focando em ensinar consumo de api e performance no React.
Normalmente não sou de explicar muito projetos feitos nas aulas mas esse além de ser um sistema bem interessante onde você contabiliza gastos também tive a oportunidade de fazer algumas coisinhas a mais que não foram feitas nas aulas e irei citá-las abaixo junto com um gif com a aplicação numa tela mobile:

 - Tornei a aplicação responsiva para tablets e mobile com uso de media queries e useLayoutEffect;
 - Adicionei paginação nas transações mostradas pelo sistema;
 - Usei a biblioteca Swiper para tranformar os cards da aplicação em um carrosel para ajudar na visão dos elementos ao visualizar o site em telas menores;

![firefox_SkSbhiKov9](https://user-images.githubusercontent.com/45273884/196604482-1e201aa1-db32-400f-80e3-b16b4ef2855c.gif)

## Como iniciar o projeto

Instale as dependências do projeto com:
```
npm i
```

Para iniciar a aplicação use:
```
npm run dev
```

Para iniciar o json-server use:
```
npm run dev:server
```

Para buildar a aplicação use:
```
npm run build
```

## Tecnologias usadas

 - O projeto foi escrito usando Typescript;
 - React com Vite;
 - Contexto feito com a api do useContext;
 - Melhorado o contexto e seu impacto na performance da aplicação com a biblioteca use-context-selector
 - Foi usado styled-components com polished para usar css in js.
 - Ícones com Phosphor;
 - Componentes primitivos usando Radix Ui;
 - Api rest mockada com a lib json-server
 - Axios para consumo da api;
 - Formulário usando react-hook-forms com validação da biblioteca zod;
 - Swiper para criação de carrosel de cards com consumos para mobile.

## Possíveis problemas

  Não foi detectado nenhum até o momento.

## Possíveis melhorias

 - Como foi usado json server para mockar um servidor, seria possível personalizar o servidor para termos alguns endpoint com cálculos e não depender de tantos cálculos no frontend.

## Autor

Marcelo "Masa" Alves
- <img src="https://user-images.githubusercontent.com/45273884/192056758-d7c1995b-4459-4acf-bb20-c4e19ee5daf3.svg" alt="twitter-logo" style="width: 20px; height: 20px;"> [@masamarux](https://twitter.com/masamarux)
- <img src="https://user-images.githubusercontent.com/45273884/192056770-fa5b48e0-a216-4f55-86fc-83cc6dd3590a.svg" alt="linkedin-logo" style="width: 20px; height: 20px;"> [Marcelo Alves](https://www.linkedin.com/in/marceloalves-/)


## Histórico de versões
* 1.0 - (19/10/2022)
    * Lançamento inicial
