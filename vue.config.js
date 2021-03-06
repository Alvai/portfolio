const productionGzipExtensions = ["js", "css"];

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/../node_modules/bulma/sass/utilities/initial-variables.sass";
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_global.scss";
        `
      }
    }
  },
  configureWebpack: {
    plugins: [
      new (require("compression-webpack-plugin"))({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
};
