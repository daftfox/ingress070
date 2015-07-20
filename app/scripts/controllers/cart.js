'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
.controller('CartCtrl',['$scope', function ($scope) {
    $scope.numBananas = 5;
    $scope.bananaPrice = 2;
    $scope.banana = {
		title: 'Banana',
		subTitle: 'Banana?',
		description: 'Banananananananana',
		image: '../images/banana.png',
		price: 2,
		num: 5
	}
    $scope.items = [	
    ];

    $scope.items.push($scope.banana);

    $scope.addItem = function(){
    	var newItem = angular.copy($scope.banana);
    	$scope.items.push(newItem);
    };

    $scope.removeItem = function(index){
    	$scope.items.splice(index, 1);
    };

    $scope.totalPrice = function(){
    	var total = 0;
    	angular.forEach($scope.items, function(item){
    		total += item.price * item.num;
    	});
    	return total;
    };
  }]);
