const { defineConfig } = require("cypress");





module.exports = defineConfig({
  e2e: {
    // implement node event listeners here
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      const testenv = process.env.TEST_ENV || config.env.testenv || 'localhost';
      // test123 is set as default if nothing is passed
      function loadHost(testenv) {
        let cat, bird, bear;

        if (testenv == 'localhost') {
          cat = `http://${testenv}:3000`,
            bird = `http://${testenv}:3001`,
            bear = `http://${testenv}:3002`
        }
        hostJson = { cat: cat, bird: bird, bear: bear };
        console.log(hostJson);
        return hostJson
      }
      const { bird, ...targetHost } = loadHost(testenv);
      config.env = targetHost;
      // change baseUrl
      config.baseUrl = bird;
      return config;
    },
    env: {
    },
    // baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/tests/*.js',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 4000,
    ViewportWidth: 1440,
    ViewportHeight: 900,
    chromeWebSecurity: true,
    video: false,
    watchForFileChanges: false
  },
},
);  
