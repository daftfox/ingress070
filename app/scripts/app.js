'use strict';

/**
 * @ngdoc overview
 * @name ingress070App
 * @description
 * # ingress070App
 *
 * Main module of the application.
 */
angular
  .module('ingress070App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/fs070', {
        templateUrl: 'views/fs070.html',
        controller: 'Fs070Ctrl'
      })
      .when('/missions', {
        templateUrl: 'views/missions.html',
        controller: 'MissionsCtrl'
      })
      .when('/swag', {
        templateUrl: 'views/swag.html',
        controller: 'SwagCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal');
    $mdThemingProvider.theme('enlightened')
      .primaryPalette('green');
    $mdThemingProvider.theme('resistance')
      .primaryPalette('blue');
  });
