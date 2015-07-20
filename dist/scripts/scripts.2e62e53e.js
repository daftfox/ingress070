"use strict";var app=angular.module("ingress070App",["ngAnimate","ngAria","ngCookies","ngMaterial","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/fs070",{templateUrl:"views/fs070.html",controller:"Fs070Ctrl"}).when("/missions",{templateUrl:"views/missions.html",controller:"MissionsCtrl"}).when("/swag",{templateUrl:"views/swag.html",controller:"SwagCtrl"}).when("/cart",{templateUrl:"views/cart.html",controller:"CartCtrl"}).otherwise({redirectTo:"/"})}]).config(["$mdThemingProvider",function(a){a.theme("default").primaryPalette("teal"),a.theme("enlightened").primaryPalette("green"),a.theme("resistance").primaryPalette("blue")}]);app.controller("MainCtrl",["$scope","$location","$mdToast","$document","$animate","$timeout",function(a,b,c,d,e,f){a.theme="default",a.openFAB=!1,a.alterTheme=function(b){a.theme=b},a.navigateTo=function(c){f(function(){a.openFAB=!1},200),b.path(c)},a.toastPosition={bottom:!0,top:!1,left:!1,right:!0},a.getToastPosition=function(){return Object.keys(a.toastPosition).filter(function(b){return a.toastPosition[b]}).join(" ")},a.banana=function(){var b=c.simple().content("Banana!").action("Close").hideDelay(1e4).highlightAction(!1).position(a.getToastPosition());c.show(b).then(function(){console.log("Banana!")})},a.toggleFAB=function(){console.log("toggle"),a.openFAB=!a.openFAB},d.bind("scroll",function(){a.$apply(function(){if(d.scrollTop()>150){var a=angular.element(".header-navigation");e.addClass(a,"fade"),e.removeClass(a,"removefade")}else{var a=angular.element(".header-navigation");e.addClass(a,"removefade"),e.removeClass(a,"fade")}})})}]),app.controller("HomeCtrl",["$scope",function(a){}]),app.controller("Fs070Ctrl",["$scope",function(a){}]),app.controller("MissionsCtrl",["$scope",function(a){}]),app.controller("SwagCtrl",["$scope","CategoryService",function(a,b){b.getAll(null,function(a){console.log(a)}),a.tiles=[{icon:"",title:"Patches",background:"patches",span:{row:1,col:2}},{icon:"",title:"Custom swag",background:"custom",span:{row:1,col:2}},{icon:"",title:"Consumables",background:"consumables",span:{row:1,col:2}}]}]),app.controller("CartCtrl",["$scope",function(a){a.numBananas=5,a.bananaPrice=2,a.banana={title:"Banana",subTitle:"Banana?",description:"Banananananananana",image:"../images/banana.png",price:2,num:5},a.items=[],a.items.push(a.banana),a.addItem=function(){var b=angular.copy(a.banana);a.items.push(b)},a.removeItem=function(b){a.items.splice(b,1)},a.totalPrice=function(){var b=0;return angular.forEach(a.items,function(a){b+=a.price*a.num}),b}}]),app.service("CategoryService",["$resource",function(a){return CategoryService={resource:a("/api/categories/:id/",null,{getAll:{method:"GET"},getById:{method:"GET"}})},{getAll:CategoryService.resource.getAll,getById:CategoryService.resource.getById}}]);