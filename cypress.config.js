const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl = "https://admineber.elluminatiinc.net/admin/login"; // Update with your application's base URL
      process.env.HTTPS = true;

    },
  },
});
