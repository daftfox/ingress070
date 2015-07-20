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
    CategoryService.getAll(null, function(res){
        console.log(res);
    });

    $scope.tiles =[
    	{
            icon : "",
            title: "Patches",
            background: "patches",
            span: {
            	row: 1,
            	col: 2
            }
        },{
            icon : "",
            title: "Custom swag",
            background: "custom",
            span: {
            	row: 1,
            	col: 2
            }
        },{
            icon : "",
            title: "Consumables",
            background: "consumables",
            span: {
            	row: 1,
            	col: 2
            }
        }
    ];
  }]);
