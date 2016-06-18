angular.module('gitApp.services')
  .service('GithubService', ['$resource', '$q', function($resource, $q) {
    const Repos = $resource('https://api.github.com/users/:username/repos', { username : '@username' }, {
                    fetch: {method: 'GET', isArray: true}
                  });

    this.getRepos = (username) => {
      const deferred = $q.defer();

      Repos.fetch({username}, 
        resp => deferred.resolve(resp),
        err => deferred.reject(err));

      return deferred.promise;
    };
  }]);