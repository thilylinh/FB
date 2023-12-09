const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/public/scss/variable/${process.env.VUE_APP_BASE_SKIN}/_variable.scss";
        `
      }
    },
  },
});
