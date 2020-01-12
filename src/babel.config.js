module.exports = {
  presets: [
    "@vue/app",
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          safari: "9"
        }
      }
    ]
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
