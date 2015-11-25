'use strict';

/**
 * @ngdoc function
 * @name angulartutsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartutsApp
 */
angular.module('angulartutsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
