"use strict";var app=angular.module("ingress070App",["ngAnimate","ngAria","ngCookies","ngMaterial","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",cartVisible:!1}).when("/fs070",{templateUrl:"views/fs070.html",controller:"Fs070Ctrl",cartVisible:!1}).when("/missions",{templateUrl:"views/missions.html",controller:"MissionsCtrl",cartVisible:!1}).when("/swag",{templateUrl:"views/swag.html",controller:"SwagCtrl",cartVisible:!0}).when("/category/:categoryId",{templateUrl:"views/category.html",controller:"CategoryCtrl",cartVisible:!0}).when("/cart",{templateUrl:"views/cart.html",controller:"CartCtrl",cartVisible:!0}).otherwise({redirectTo:"/"})}]).config(["$mdThemingProvider",function(a){a.theme("default").primaryPalette("teal"),a.theme("enlightened").primaryPalette("green"),a.theme("resistance").primaryPalette("blue")}]);angular.module("ingress070App").controller("MainCtrl",["$scope","$location","$mdToast","$document","$animate","$timeout","CartService",function(a,b,c,d,e,f,g){a.theme="default",a.openFAB=!1,a.toastPosition={bottom:!0,top:!1,left:!1,right:!0},a.alterTheme=function(b){a.theme=b},a.navigateTo=function(c){f(function(){a.openFAB=!1},200),b.path(c)},a.getToastPosition=function(){return Object.keys(a.toastPosition).filter(function(b){return a.toastPosition[b]}).join(" ")},a.banana=function(){var b=c.simple().content("Banana!").action("Close").hideDelay(1e4).highlightAction(!1).position(a.getToastPosition());c.show(b).then(function(){console.log("Banana!")})},a.toggleFAB=function(){console.log("toggle"),a.openFAB=!a.openFAB},d.bind("scroll",function(){a.$apply(function(){if(d.scrollTop()>150){var a=angular.element(".header-navigation");e.addClass(a,"fade"),e.removeClass(a,"removefade")}else{var a=angular.element(".header-navigation");e.addClass(a,"removefade"),e.removeClass(a,"fade")}})})}]),angular.module("ingress070App").controller("HomeCtrl",["$scope",function(a){}]),angular.module("ingress070App").controller("Fs070Ctrl",["$scope",function(a){}]),angular.module("ingress070App").controller("MissionsCtrl",["$scope",function(a){}]),angular.module("ingress070App").controller("SwagCtrl",["$scope","CategoryService","$timeout","$location",function(a,b,c,d){function e(){angular.forEach(a.categories,function(b){var c={icon:"",id:b.id,title:b.name,background:b.name.toLowerCase(),span:{row:1,col:2}};a.tiles.push(c)})}a.tiles=[],b.getAll(null,function(b){a.categories=b,e()}),a.navigateTo=function(b){c(function(){a.openFAB=!1},200),d.path(b)}}]),angular.module("ingress070App").controller("CartCtrl",["$scope","CartService",function(a,b){a.items=b.getCart(),a.removeItem=function(b){a.items.splice(b,1)},a.totalPrice=function(){var b=0;return angular.forEach(a.items,function(a){b+=a.price*a.amount}),b}}]),angular.module("ingress070App").controller("CategoryCtrl",["$scope","ProductService","$routeParams","CategoryService","CartService",function(a,b,c,d,e){a.products=[],a.category;c.categoryId;a.products=[{id:1,category:{id:1,name:"Patches"},name:"IngressFS Patch",description:"The original IngressFS patch.",price:200,num:1},{id:2,category:{id:1,name:"Patches"},name:"Shonin Patch",description:"Shonin anomaly patch.",price:200,num:1},{id:3,category:{id:1,name:"Patches"},name:"Persepolis Patch",description:"Persepolis anomaly patch.",price:200,num:1}],a.addToCart=function(a,b){var c=e.getCart(),d={id:a.id,name:a.name,description:a.description,price:a.price,amount:b?b:1},f=_.findLastIndex(c,{id:d.id});void 0!=f&&-1!=f?(c[f].amount+=d.amount,e.setCart(c)):e.addToCart(d),a.num=1}}]),angular.module("ingress070App").controller("ProductCtrl",["$scope","ProductService",function(a,b){}]),angular.module("ingress070App").service("CategoryService",["$resource",function(a){var b={resource:a("/api/categories/:id/",null,{getAll:{method:"GET",isArray:!0},getById:{method:"GET"}})};return{getAll:b.resource.getAll,getById:b.resource.getById}}]),angular.module("ingress070App").service("ProductService",["$resource",function(a){var b={resource:a("/api/:category/:categoryId/products/:id/",null,{getAll:{method:"GET",isArray:!0},getByCategoryId:{method:"GET",isArray:!0,params:{category:"categories"}},getById:{method:"GET"}})};return{getAll:b.resource.getAll,getByCategoryId:b.resource.getByCategoryId,getById:b.resource.getById}}]),angular.module("ingress070App").service("CartService",["$resource",function(a){var b={_cart:[],getCart:function(){return b._cart},addToCart:function(a){b._cart.push(angular.copy(a))},setCart:function(a){b._cart=a},removeFromCart:function(){}};return{getCart:b.getCart,setCart:b.setCart,addToCart:b.addToCart}}]),angular.module("ingress070App").directive("cartWidget",["CartService","$timeout","$route","$location",function(a,b,c,d){return{restrict:"E",replace:!0,scope:{theme:"@"},templateUrl:"scripts/directives/templates/cartWidget.html",link:function(e,f,g){e.cart=a.getCart(),e.$watch("cart",function(a,c){a!=c&&(f.addClass("bounce"),e.cart=a,b(function(){f.removeClass("bounce")},300))},!0),e.$watch(function(){return c.current},function(a){a.cartVisible?f.addClass("visible"):f.removeClass("visible")}),e.navigateTo=function(a){d.path(a)},e.removeFromCart=function(b){e.cart.splice(b,1),a.setCart(e.cart)},e.totalPrice=function(){var a=0;return angular.forEach(e.cart,function(b){a+=b.amount*b.price}),a}},controller:["$scope","$element",function(a,b){}]}}]);