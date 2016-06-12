angular.module('gitApp.services')
  .factory('GithubService', ['$rootScope', '$resource', '$http', '$q', ($rootScope, $resource, $http, $q) => {
    return {
      api: $resource('https://api.github.com/users/:username/repos', { username : '@username' }, {
          fetch: {method: 'GET', isArray: true}
      }),
      getRepos: function(username) {
        const deferred = $q.defer();
        const Repos = this.api;

        Repos.fetch({username}, 
          resp => deferred.resolve(resp),
          err => deferred.reject(err));

        return deferred.promise;
      }
    };
  }]);