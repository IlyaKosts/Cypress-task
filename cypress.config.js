const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com"
  },
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 40000,
  viewportHeight: 800,
  viewportWidth: 1360,
  waitForAnimations: true,
});
