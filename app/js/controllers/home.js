angular.module('gitApp.controllers') 
  .controller('HomeCtrl', ['$scope', 'GithubService',
    function($scope, GithubService) {
      var vm =this;console.log(vm);
      /**
       * Display appropriate error message to the user
       * @param  {object} err the error object returned by GithubService
       */
      function displayErrorMessage(err) {
        $scope.fetching = false; 

        // if request times out
        if(err.status === 408 || err.statusText === '') {
          toastr.error('No response from Github servers');
        }
        // user account does not exist
        else if(err.status === 404) {
          toastr.error('User does not exist');
        }
        else {
          toastr.error(err.data.message);
        }
      }

      // Fetches the user's repo from github
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
