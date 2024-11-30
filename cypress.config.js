const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'reporters/custom.js',
  e2e: {
    
    baseUrl: "https://bookings.orufy.com/api/v1",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
