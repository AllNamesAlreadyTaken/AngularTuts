'use strict';

/**
 * @ngdoc function
 * @name angulartutsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulartutsApp
 */
angular.module('angulartutsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
