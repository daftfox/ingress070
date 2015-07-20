angular.module('ingress070App')
.service('CategoryService', function($resource){
	var CategoryService = {
		resource: $resource('/api/categories/:id/', null, {
			getAll: 		{method: 'GET', isArray: true},
			getById: 		{method: 'GET'}
		})
	}
	return {
		getAll: 					CategoryService.resource.getAll,
		getById: 	 				CategoryService.resource.getById
	}
});