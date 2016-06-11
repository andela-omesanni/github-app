/* define our modules */
angular.module('gitApp.services', ['ngCookies']);
angular.module('gitApp.filters', []);
angular.module('gitApp.directives', []);
angular.module('gitApp.controllers', []);

/* load services */

/* load filters */

/* load directives */

/* load controllers */
require('./js/controllers/home.js');

window.GitApp = angular.module('GitApp', [
  'ui.router',
  'gitApp.controllers',
  'gitApp.directives',
  'gitApp.filters',
  'gitApp.services',
  'ngAnimate',
  'ngMaterial',
  'md.data.table',
]);

/* application routes */
GitApp.config(['$stateProvider','$locationProvider', '$mdThemingProvider', '$mdDateLocaleProvider',
  ($stateProvider, $locationProvider, $mdThemingProvider, $mdDateLocaleProvider) => {
    $locationProvider.html5Mode(true);

    const customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('ranger')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      });
      
    $stateProvider
      .state('default', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
}]);
