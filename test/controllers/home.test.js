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
    expect(ctrl.getRepos()).toBeUndefined();
  });

  it('should fetch user\'s repos', function() {
    ctrl.username = 'angular';
    ctrl.getRepos();

    deferred.resolve([{name: 'angular'}]);
    rootScope.$digest();
         
    expect(ctrl.repos.length).toEqual(1);
  });

  function testForErrors(errObject, text) {
    ctrl.username = 'omesanni';
    ctrl.getRepos();

    deferred.reject(errObject);
    rootScope.$digest();

    expect(ctrl.repos.length).toBeFalsy();
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