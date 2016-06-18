'use strict';

describe('asyncLoader directive test', function() {
  var scope, compile;

  beforeEach(module('GitApp'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    scope = $rootScope.$new();
  }));

  function runSpinnerTests(bool, num) {
    var element = angular.element('<async-loader fetching="fetching"></async-loader>');
    scope.fetching = bool;

    var compiledElement = compile(element)(scope);
    scope.$digest();

    var isolateScope = compiledElement.isolateScope();
    var length = compiledElement[0].querySelectorAll('md-progress-circular').length;

    expect(isolateScope.fetching).toBe(bool);
    expect(length).toEqual(num);
  }

  it('should test that spinner animation is not loading', function() {
    runSpinnerTests(false, 0);
  });

  it('should test that spinner animation is loading', function() {
    runSpinnerTests(true, 1);
  });
});