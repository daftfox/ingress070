'use strict';

/**
 * @ngdoc function
 * @name fs070App.controller:SwagCtrl
 * @description
 * # SwagCtrl
 * Controller of the fs070App
 */
angular.module('ingress070App')
.controller('SwagCtrl',['$scope', 'CategoryService', '$timeout', '$location', function ($scope, CategoryService, $timeout, $location) {
    $scope.tiles =[];

    CategoryService.getAll(null, function(res){
        $scope.categories = res;
        aggregateData();
    });

    function aggregateData(){
        angular.forEach($scope.categories, function(category){
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

    $scope.navigateTo = function(page){
        $timeout(function(){
            $scope.openFAB = false;
        }, 200);
        $location.path(page);
    };

  }]);
