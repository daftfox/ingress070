'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:SwagCtrl
 * @description
 * # SwagCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
.controller('SwagCtrl',['$scope', 'CategoryService', function ($scope, CategoryService) {
    $scope.tiles =[];


    CategoryService.getAll(null, function(res){
        $scope.categories = res;
    });

    function aggregateData(){
        angular.foreach($scope.categories, function(category){
            var newObj = {
                icon : "",
                id: category.id,
                title: category.name,
                background: category.name.toLowerCase(),
                span: {
                    row: 1,
                    col: 2
                }
            }
            $scope.tiles.push(newObj);
        });
    }

  }]);
