const path = require("path");

module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  }
};

module.exports = {
    css: {
      loaderOptions: {
        sass: {
        includePaths: ["./node_modules/@syncfusion"]
        }
      }
    }
  }

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./node_modules/@syncfusion/ej2-base/styles/material.scss"),
        path.resolve(__dirname, "./node_modules/@syncfusion/ej2-vue-grids/styles/material.scss"),
      ]
    });
}