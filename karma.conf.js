// Karma configuration
module.exports = function(config) {
  config.set({

    // base path used to resolve all patterns (e.g. files, exclude)
    // basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'requirejs', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      /* !! Including too many file from "lib" could be a bad practice */
      {pattern: 'www/lib/**/*.js', included: false},
      {pattern: 'www/js/**/!(test-main).js', included: false},
      {pattern: 'node_modules/chai/chai.js', included: false},
      {pattern: 'www/templates/*.html', included: false, served: true},
      {pattern: 'www/js/test-main.js', included: true},
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      'www/!(lib)/**/!(test-main).js': ['coverage']
    },

    /* Since project is bootstraped under www/js, we need to
       enable HTTP requests to access ../templates
    */
    proxies: {
      '/templates/': '/base/www/templates/'
    },

    coverageReporter: {
      reporters:[
        {type: 'html', dir:'coverage/'},
        {type: 'text-summary'}
      ],
    },

    // test results reporter to use
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests on file changes
    autoWatch: true,

    // start these browsers
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};