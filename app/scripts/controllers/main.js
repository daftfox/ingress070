'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
  .controller('MainCtrl',['$scope', '$location', '$mdToast', '$document', '$animate', '$timeout',
  	function ($scope, $location, $mdToast, $document, $animate, $timeout) {
    $scope.theme = "default";
    $scope.hideFAB = false;
    $scope.openFAB = false;
    $scope.alterTheme = function(theme){
    	$scope.theme = theme;
    }
    $scope.navigateTo = function(page){
    	$timeout(function(){
    		$scope.openFAB = false;
    	}, 200);
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
