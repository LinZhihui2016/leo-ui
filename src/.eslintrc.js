module.exports = {
  root: true,

  env: {
    node: true,
    es6: true,
    browser: true
  },

  plugins: ["html", "prettier"],

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier"
  ],

  rules: {
    "prettier/prettier": "error",
    indent: [2, 2, { SwitchCase: 1 }],
    eqeqeq: [2, "always"],
    "no-undef": 0,
    "no-unexpected-multiline": 2,
    "no-unused-vars": 2,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 6
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier",
    "@vue/prettier",
    "@vue/typescript"
  ]
};
