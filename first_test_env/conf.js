// Reference Configuration File
//
// This file shows all of the configuration options that may be passed
// to Protractor.
//
// Because this file shows all of the options, if used in practice some
// will be overridden or ignored. If you're looking for a seed configuration
// file, see example/conf.js

exports.config = {


  // ---- 2. To connect to a Selenium Server which is already running ----------
  // The address of a running Selenium Server. If specified, Protractor will
  // connect to an already running instance of Selenium. This usually looks like
   seleniumAddress: 'http://localhost:4444/wd/hub',
   chromeDriver: '../chromedriver',

  // ---------------------------------------------------------------------------
  // ----- What tests to run ---------------------------------------------------
  // ---------------------------------------------------------------------------

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],

  // Patterns to exclude.
  exclude: [],

  // Alternatively, suites may be used. When run without a command line
  // parameter, all suites will run. If run with --suite=smoke or
  // --suite=smoke,full only the patterns matched by the specified suites will
  // run.
  suites: {
    smoke: 'spec/smoketests/*.js',
    full: 'spec/*.js'
  },

  framework: 'jasmine2',

  onPrepare: function() {
    //browser.driver.manage().window().maximize();
    browser.driver.manage().window().setSize(1920, 1080);
  }
};
