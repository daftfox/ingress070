'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
.controller('CategoryCtrl',['$scope', 'ProductService', '$routeParams', function ($scope, ProductService, $routeParams) {
    $scope.products =[];

    var categoryId = $routeParams.categoryId;

    ProductService.getByCategoryId({categoryId: categoryId}, function(res){
        $scope.products = res;
        console.log(res);
    });
  }]);
