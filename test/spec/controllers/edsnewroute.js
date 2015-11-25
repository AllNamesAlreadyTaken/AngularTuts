'use strict';

describe('Controller: EdsnewrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('angulartutsApp'));

  var EdsnewrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EdsnewrouteCtrl = $controller('EdsnewrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
