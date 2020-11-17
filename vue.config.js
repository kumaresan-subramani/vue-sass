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
        includePaths: ["node_modules/@syncfusion"]
    }
    });
}
