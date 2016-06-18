'use strict';

describe('Github Service Test', function() {

  var GithubService, httpBackend;

  var endPoint = 'https://api.github.com/users/{username}/repos';

  beforeEach(module('GitApp'));

  beforeEach(inject(function(_GithubService_, $httpBackend) {
    GithubService = _GithubService_;
    httpBackend = $httpBackend;
  }));

  it('should return repos from github', function() {
    var repos;

    httpBackend
      .expect('GET', endPoint.replace('{username}', 'angular'))
      .respond(200, [{name: 'angular'}]);

    GithubService
      .getRepos('angular')
      .then(function(resp) { 
        repos = resp;
      });

    httpBackend.flush();

    expect(repos.length).toBe(1);
  });

  it('should return error', function() {
    var error;

    httpBackend
      .expect('GET', endPoint.replace('{username}', 'omesanni'))
      .respond(404, {message: 'user not found'});

    GithubService
      .getRepos('omesanni')
      .then(function(resp) {

      }, function(err) {
        error = err;
      });

    httpBackend.flush();

    expect(error.status).toBe(404);
  });
});