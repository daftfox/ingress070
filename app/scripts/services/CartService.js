angular.module('ingress070App')
.service('CartService', function($resource){
	var CartService = {
		_cart: [],
			
		getCart: function(){
			return CartService._cart;
		},

		addToCart: function(item){
			CartService._cart.push(angular.copy(item));
		},

		setCart: function(cart){
			CartService._cart = cart;
		},

		removeFromCart: function(){

		}
	}
	return {
		getCart: 			CartService.getCart,
		setCart: 			CartService.setCart,
		addToCart: 			CartService.addToCart
	}
});