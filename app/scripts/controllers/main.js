'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
  .controller('MainCtrl',['$scope', '$location', '$mdToast', function ($scope, $location, $mdToast) {
    $scope.theme = "default";
    $scope.alterTheme = function(theme){
    	$scope.theme = theme;
    }
    $scope.navigateTo = function(page){
    	console.log(page);
    	$location.path(page);
    };
    $scope.toastPosition = {
	    bottom: true,
	    top: false,
	    left: false,
	    right: true
  	};
  	$scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
      	.filter(function(pos) { return $scope.toastPosition[pos]; })
      	.join(' ');
  	};
    $scope.banana = function(){
    	var toast = $mdToast.simple()
          .content('Banana!')
          .action('Close')
          .hideDelay(10000)
          .highlightAction(false)
          .position($scope.getToastPosition());
	    $mdToast.show(toast).then(function() {
	      console.log("Banana!");
	    });
    };
  }]);
