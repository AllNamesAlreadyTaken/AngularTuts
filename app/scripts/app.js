'use strict';

/**
 * @ngdoc overview
 * @name angulartutsApp
 * @description
 * # angulartutsApp
 *
 * Main module of the application.
 */
angular
  .module('angulartutsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/EdsNewRoute', {
        templateUrl: 'views/edsnewroute.html',
        controller: 'EdsnewrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
