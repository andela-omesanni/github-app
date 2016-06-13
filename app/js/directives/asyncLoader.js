angular.module('gitApp.directives')
  .directive('asyncLoader', () => {
    return {
      restrict: 'E',
      template: `<div ng-if="fetching" layout="row" layout-align="space-around">
                  <md-progress-circular md-mode="indeterminate" class="md-accent"></md-progress-circular>
                </div>`,
      scope: {
        fetching: '='
      },
      controller: $scope => {}
    };
  });
