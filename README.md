# example

## Project setup

Installation
The Vue CLI is a command line utility, and you install it globally using npm:

```
npm install -g @vue/cli
```

or using Yarn:

```
yarn global add @vue/cli
```

How to use the CLI to create a new Vue project
The first thing you’re going to do with the CLI is to create a Vue app:

```
vue create example
```

The cool thing is that it’s an interactive process. You need to pick a preset. By default, there is one preset that’s providing Babel and ESLint integration:

img1(./images/img1.jpg)

I’m going to press the down arrow ⬇️ and manually choose the features I want:

img2

Press space to enable one of the things you need, and then press enter to go on. Since I chose a linter/formatter, Vue CLI prompts me for the configuration. I chose ESLint + Prettier since that’s my favorite setup:

img3

Next thing is choosing how to apply linting. I choose lint on save

img4

Vue CLI asks me where to put all the configuration: if in the package.json file, or in dedicated configuration files, one for each tool. I chose the latter

img5

Vue CLI then asks me if I prefer using Yarn or npm:

img6

### How to use sass to the newly created Vue CLI application

If you already have created your project without the previous steps, manually install sass-loader:

```
npm install -D sass-loader node-sass
```

You will probably want, to import your SCSS functions, mixins and variables into your components as well. Add style-resources-loader to your project.

```
npm i style-resources-loader -D
```

### Make variables functions and mixins accessible to component

If you don’t already have a vue.config.js file at the root of your project, create it.

Add your shared SCSS files to this one so your components can use variables, mixins, functions etc.

```
const path = require("path");
const globImporter = require('node-sass-glob-importer');

module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  }  
};

function addStyleResource(rule) {
  rule
    .use("sass-loader")
    .loader("sass-loader")
    .options({
      sassOptions: {
        importer: globImporter(),
        includePaths: ["node_modules/@syncfusion"] --> To achieve import path reference
    }
    });
}
```

## Compiles and hot-reloads for development

Vue CLI has created the app for us, and we can go in the example folder and run yarn serve to start up our first app in development mode:

```
npm run serve
```

img7

## Compiles and minifies for production
```
npm run build
```

## Lints and fixes files
```
npm run lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
