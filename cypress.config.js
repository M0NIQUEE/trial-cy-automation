const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.qase.io/login',
    viewportWidth: 1400,
    viewportHeight: 1200,
  },
})