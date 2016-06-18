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
      'public/lib/angular-animate/angular-animate.min.js',
      'public/lib/angular-material/angular-material.min.js',
      'public/lib/jquery/dist/jquery.min.js',
      'public/lib/toastr/toastr.min.js',
      'public/js/index.js',
      'test/**/*.js'
    ],

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
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]
  });
};
