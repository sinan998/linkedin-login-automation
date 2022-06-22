const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'Test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'www.linkedin.com',
      browser: 'chrome',
      windowSize: 'maximize',
    }
  },
  include: {
    I: './steps_file.js',
    loginPagePage: './pages/loginPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'linkedin-login-automation',
  plugins: {
    
    allure: {
      "enabled": true,
  }
}
}