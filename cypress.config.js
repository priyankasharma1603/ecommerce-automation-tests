const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ddhr96',
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
