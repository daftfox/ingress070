angular.module('ingress070App')
.service('ProductService', function($resource){
	var ProductService = {
		resource: $resource('/api/:category/:categoryId/products/:id/', null, {
			getAll: 			{method: 'GET', isArray: true},
			getByCategoryId: 	{method: 'GET', isArray: true, params: {category: 'categories'}},
			getById: 			{method: 'GET'}
		})
	}
	return {
		getAll: 					ProductService.resource.getAll,
		getByCategoryId:			ProductService.resource.getByCategoryId,
		getById: 	 				ProductService.resource.getById
	}
});