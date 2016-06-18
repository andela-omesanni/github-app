/* define our modules */
angular.module('gitApp.services', []);
angular.module('gitApp.filters', []);
angular.module('gitApp.directives', []);
angular.module('gitApp.controllers', []);

/* load services */
require('./js/services/githubService.js');

/* load filters */

/* load directives */
require('./js/directives/asyncLoader.js');

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
  'ngResource'
]);

/* application routes */
GitApp.config(['$stateProvider', '$locationProvider', '$mdThemingProvider',
  ($stateProvider, $locationProvider, $mdThemingProvider) => {
    $locationProvider.html5Mode(true);

    const customBlueMap = $mdThemingProvider.extendPalette('blue', {
      50: '#DCEFFF',
      100: '#AAD1F9',
      200: '#7BB8F5',
      300: '#4C9EF1',
      400: '#1C85ED',
      500: '#106CC8',
      600: '#0159A2',
      700: '#025EE9',
      800: '#014AB6',
      900: '#013583',
      contrastDefaultColor: 'light',
      contrastDarkColors: '50 100 200 A100',
      contrastStrongLightColors: '300 400 A200 A400'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('variant').primaryPalette('customBlue');
      
    $stateProvider
      .state('default', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
}]);
