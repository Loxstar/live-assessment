const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // implement node event listeners here
    setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/tests/*.js',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 4000,
    ViewportWidth: 1440,
    ViewportHeight: 900,
    chromeWebSecurity: true,
    video: false,
    trashAssetsBeforeRuns: true,
  },
  },
);  
