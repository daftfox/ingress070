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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
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
