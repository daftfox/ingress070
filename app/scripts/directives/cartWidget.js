angular.module('ingress070App')
.directive('cartWidget', function(CartService, $timeout, $route, $location){
	return{
		restrict: "E",
		replace: true,
		scope: {
			theme: "@"
		},
		templateUrl: "scripts/directives/templates/cartWidget.html",
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
				var totalPrice = 0;
				angular.forEach(scope.cart, function(item){
					totalPrice += item.amount * item.price;
				});
				return totalPrice;
			}
		},
		controller: function($scope, $element){
			
		}
	}
});