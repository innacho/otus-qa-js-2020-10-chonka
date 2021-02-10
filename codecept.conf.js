const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './specs/*.spec.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'atlassian.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    mainPublicPage: './pages/mainPublic.js',
    mainAuthorizedPage: './pages/mainAuthorized.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'otus-qa-js-2020-10-chonka',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
