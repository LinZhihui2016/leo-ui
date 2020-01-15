var webpackConfig = require("@vue/cli-service/webpack.config.js");

module.exports = function(config) {
  config.set({
    frameworks: ["mocha"],
    files: ["src/test/**/*.test.ts", "src/test/**/*.test.css"],
    preprocessors: {
      "src/test/**/*.test.ts": ["webpack", "sourcemap"]
    },
    webpack: webpackConfig,
    reporters: ["progress"],
    browsers: ["ChromeHeadless"]
  });
};
