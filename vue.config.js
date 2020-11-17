const path = require("path");

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
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./node_modules/@syncfusion"),
      ]
    });
}

// chainWebpack: config => {
//   config.module
//     .rule('vue')
//     .use('sass-loader')
//       .loader('sass-loader')
//       .tap(options => {
//         // modify the options...
//         options ={
//             includePaths: ["node_modules/@syncfusion",""]
//         }
//         return options
//       })
// },
