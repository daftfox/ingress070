'use strict';

/**
 * @ngdoc overview
 * @name fs070App
 * @description
 * # fs070App
 *
 * Main module of the application.
 */
angular
  .module('fs070App', [
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
