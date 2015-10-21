angular.module('ingress070App')
.directive('cartWidget', function(CartService, $timeout, $route, $location){
	return{
		restrict: "E",
		replace: true,
		scope: {
			theme: "@"
		},
		templateUrl: "views/templates/cartWidget.html",
		link: function(scope, element, attrs){
			
			scope.cart = CartService.getCart();
			scope.$watch('cart', function(newVal, oldVal){
				if(newVal != oldVal){
					element.addClass('bounce');
					scope.cart = newVal;
					$timeout(function(){
						element.removeClass('bounce');
					}, 300);
				}
			}, true);

			scope.$watch(function(){
				return $route.current
			}, function(newVal){
				if(newVal.cartVisible){
			    	element.addClass('visible');
				} else {
			    	element.removeClass('visible');
				}
			});

			scope.navigateTo = function(page){
		      $location.path(page);
		    };

			scope.removeFromCart = function(index){
				scope.cart.splice(index, 1);
				CartService.setCart(scope.cart);
			}

			scope.totalPrice = function(){
				var total = 0;
				angular.forEach(scope.cart, function(item){
					total += item.amount * item.price;
				});
				return Math.round( total * 10) / 10 ;
			}
		},
		controller: ['$scope', '$attrs', function($scope, $attrs){
			
		}]
	}
});