'use strict';

/**
 * @ngdoc overview
 * @name ingress070App
 * @description
 * # ingress070App
 *
 * Main module of the application.
 */
var app = angular
  .module('ingress070App', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        cartVisible: false
      })
      .when('/fs070', {
        templateUrl: 'views/fs070.html',
        controller: 'Fs070Ctrl',
        cartVisible: false
      })
      .when('/missions', {
        templateUrl: 'views/missions.html',
        controller: 'MissionsCtrl',
        cartVisible: false
      })
      .when('/swag', {
        templateUrl: 'views/swag.html',
        controller: 'SwagCtrl',
        cartVisible: true
      })
      .when('/category/:categoryId', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        cartVisible: true
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        cartVisible: true
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
