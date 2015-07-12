'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fs070App
 */
angular.module('fs070App')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.theme = "default";
    $scope.alterTheme = function(theme){
    	$scope.theme = theme;
    }
  }]);
