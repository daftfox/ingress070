'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
.controller('CategoryCtrl',['$scope', 'ProductService', '$routeParams', 'CategoryService', 'CartService', function ($scope, ProductService, $routeParams, CategoryService, CartService) {
    $scope.products =[];
    $scope.category;

    var categoryId = $routeParams.categoryId;

    /*CategoryService.getById({id: categoryId}, function(res){
        $scope.category = res;
    });

    ProductService.getByCategoryId({categoryId: categoryId}, function(res){
        $scope.products = res;
    });*/

    $scope.products = [{
            "id": 1,
            "category": {
              "id": 1,
              "name": "Patches"
            },
            "name": "IngressFS Patch",
            "description": "The original IngressFS patch.",
            "price": 200,
            "num": 1
          },
          {
            "id": 2,
            "category": {
              "id": 1,
              "name": "Patches"
            },
            "name": "Shonin Patch",
            "description": "Shonin anomaly patch.",
            "price": 200,
            "num": 1
          },
          {
            "id": 3,
            "category": {
              "id": 1,
              "name": "Patches"
            },
            "name": "Persepolis Patch",
            "description": "Persepolis anomaly patch.",
            "price": 200,
            "num": 1
          }];

    $scope.addToCart = function(item, num){
        var cart = CartService.getCart();
        var cartItem = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            amount: num ? num : 1
        };

        var index = _.findLastIndex(cart, {id: cartItem.id});

        if(index != undefined && index != -1){
            cart[index].amount += cartItem.amount;
            CartService.setCart(cart);
        } else {
            CartService.addToCart(cartItem);
        }

        item.num = 1;
    };
  }]);
