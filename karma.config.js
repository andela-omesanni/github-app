// Karma configuration
// Generated on Mon June 13 2015 10:34:09 GMT+0100 (WAT)
'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'public/lib/angular/angular.min.js',
      'public/lib/angular-ui-router/release/angular-ui-router.min.js',
      'public/lib/angular-aria/angular-aria.min.js',
      'public/lib/angular-resource/angular-resource.min.js',
      'public/lib/angular-mocks/angular-mocks.js',
      'public/lib/angular-material/angular-material.min.js',
      'public/lib/jquery/dist/jquery.min.js',
      'public/lib/toastr/toastr.min.js',
      'app/js/**/*.js',
      'test/client/**/*.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/*.js': ['jshint']
      //'app/js/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    plugins: [
      //'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine'
      // 'karma-junit-reporter',
      // 'karma-jshint-preprocessor',
      // 'karma-coverage'
    ],

    // coverageReporter: {
    //   type : 'lcov',
    //   dir : 'coverage/'
    // },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
