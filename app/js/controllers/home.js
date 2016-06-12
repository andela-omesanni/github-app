angular.module('gitApp.controllers') 
  .controller('HomeCtrl', ['$scope', 'GithubService',
    ($scope, GithubService) => {

      function displayErrorMessage(err) {
        $scope.fetching = false;

        if(err.status === 408 || err.statusText === '') {
          toastr.error('No response from Github servers');
        }
        else if(err.status === 404) {
          toastr.error('User does not exist');
        }
        else {
          toastr.error(err.data.message);
        }
      }

      $scope.getRepos = () => {
        if(!$scope.username) {
          return ;
        }

        $scope.fetching = true;
        $scope.resultsLimit = 15;
        $scope.repos = [];

        GithubService
          .getRepos($scope.username)
          .then(resp => {
            $scope.repos = resp;
            $scope.fetching = false;
          }, err => displayErrorMessage(err));
      };
    }
  ]
);
