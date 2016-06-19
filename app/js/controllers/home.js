angular.module('gitApp.controllers') 
  .controller('HomeCtrl', ['GithubService', function(GithubService) {
    var vm = this; 
    
    /**
     * Display appropriate error message to the user
     * @param  {object} err the error object returned by GithubService
     */
    function displayErrorMessage(err) {
      vm.fetching = false; 

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
    vm.getRepos = function() {
      if(!vm.username) {
        return ;
      }

      vm.fetching = true;
      vm.resultsLimit = 15;
      vm.repos = []; 

      GithubService
        .getRepos(vm.username)
        .then(resp => { 
          vm.repos = resp; 
          vm.fetching = false;
        }, err => displayErrorMessage(err));
    };
  }]
);