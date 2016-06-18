'use strict';

describe('Home Controller Test', function() {

  var scope, ctrl, deferred, rootScope;

  beforeEach(module('GitApp'));

  beforeEach(inject(function($rootScope, $controller, GithubService, $q) {
    deferred = $q.defer();
    
    spyOn(GithubService, 'getRepos').and.returnValue(deferred.promise);

    scope = $rootScope.$new();
    rootScope = $rootScope;
    ctrl = $controller('HomeCtrl', {$scope: scope});
  }));

  it('should return undefined due to username not specified', function() {
    expect(scope.getRepos()).toBeUndefined();
  });

  it('should fetch user\'s repos', function() {
    scope.username = 'angular';
    scope.getRepos();

    deferred.resolve([{name: 'angular'}]);
    rootScope.$digest();
         
    expect(scope.repos.length).toEqual(1);
  });

  function testForErrors(errObject, text) {
    scope.username = 'omesanni';
    scope.getRepos();

    deferred.reject(errObject);
    rootScope.$digest();

    expect(scope.repos.length).toBeFalsy();
    expect($('.toast-message').text()).toEqual(text); 
  }

  it('should test for 404 error', function() {
    testForErrors({status: 404}, 'User does not exist');
  });

  it('should test for no response error', function() {
    $('.toast-message').empty();
    testForErrors({statusText: ''}, 'No response from Github servers');
  });
});