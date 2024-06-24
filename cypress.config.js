const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    env: {
      conduitHomeScreen: 'https://demo.realworld.io/#/'
    },
    defaultCommandTimeout: 10000
  },
});
