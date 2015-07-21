'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
.controller('MainCtrl',['$scope', '$location', '$mdToast', '$document', '$animate', '$timeout', 'CartService',
  	function ($scope, $location, $mdToast, $document, $animate, $timeout, CartService) {

    $scope.theme = "default";
    $scope.openFAB = false;
    $scope.toastPosition = {
	    bottom: true,
	    top: false,
	    left: false,
	    right: true
  	};

    $scope.alterTheme = function(theme){
      $scope.theme = theme;
    }

    $scope.navigateTo = function(page){
      $timeout(function(){
        $scope.openFAB = false;
      }, 200);
      $location.path(page);
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

    $scope.toggleFAB = function(){
    	console.log("toggle");
    	$scope.openFAB = !$scope.openFAB;
    };

    $document.bind('scroll', function() {
	   $scope.$apply(function() {
	    if ($document.scrollTop() > 150) {
	      var element = angular.element(".header-navigation");
	      $animate.addClass(element, "fade");
	      $animate.removeClass(element, "removefade");
	    } else {
	      var element = angular.element(".header-navigation");
	      $animate.addClass(element, "removefade");
	      $animate.removeClass(element, "fade");
	    }
	  });
	 });
  }]);
