

0. `npm i -g preact-cli`

1. Criado o projeto com `preact create default meuProjeto`

2. Depois com o projeto criado, instala a dependência do `preact-cli-plugin-typescript`, que gera o tsconfig.json e altera o preact.config.js que fica assim:

```ts
import { resolve } from 'path';

const preactCliTypeScript = require('preact-cli-plugin-typescript')

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config original webpack config.
 * @param {object} env options passed to CLI.
 * @param {WebpackConfigHelpers} helpers object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  preactCliTypeScript(config)
}
```

3. Renomeei o arquivo src/index.js para src/index.ts;

4. Renomeei os arquivos index.js de componentes para index.tsx e  também o app.js para app.jsx e fiz o seguintes ajutes:

- Adicionei em cada pasta do componente um arquivo de declaração typescript (.d.ts) 
definindo as classes que são importadas e utilizadas no componente. Por exemplo, no header criei o arquivo style.css.d.ts com o seguinte conteúdo:

```ts
declare var style: {
    active: string,
    header: string
}

export default style;
```

E então, alterei nos arquivos index.tsx o import dos arquivos css para 

```ts


Referência:

* How to use CSS Modules with TypeScript and webpack: https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10

5. Tipei a definição dos componentes `Component<any, any>` ou definindo mesmo o tipo da property e do state;

6. Alguns Ajustes no profile.tsx;

7. Instalação da dependência do [preact-fluid](https://ajainvivek.github.io/preact-fluid/):

```bash
npm i --save preact-fluid
```

## Adicionando um Button Preact Fluid


## Utilizando o componente Notify do Preact Fluid