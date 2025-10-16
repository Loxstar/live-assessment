const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // implement node event listeners here
    baseurl: 'https://example.cypress.io/cypress-api',
    specPattern: 'cypress/e2e/**/*.cy.js',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 12000,
    ViewportWidth: 1440,
    ViewportHeight: 900,
    chromeWebSecurity: true,
    video: false,
    trashAssetsBeforeRuns: true,
  },
},
);

