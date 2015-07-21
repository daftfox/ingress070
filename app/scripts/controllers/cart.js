'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
.controller('CartCtrl',['$scope', 'CartService', function ($scope, CartService) {
    $scope.items = CartService.getCart();

    $scope.removeItem = function(index){
    	$scope.items.splice(index, 1);
    };

    $scope.totalPrice = function(){
    	var total = 0;
    	angular.forEach($scope.items, function(item){
    		total += item.price * item.amount;
    	});
    	return Math.round( total * 10) / 10 ;
    };
  }]);
