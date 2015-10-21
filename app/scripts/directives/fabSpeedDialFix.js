angular.module('ingress070App').config(function($provide) {
    $provide.decorator('mdFabSpeedDialDirective', function($delegate, $controller) {
        var directive = $delegate[0];
        var origController = directive.controller;

	    directive.controller = ['$scope','$element','$animate', function($scope, $element, $animate){
	      var vm = this;

	      // Define our open/close functions
	      // Note: Used by fabTrigger and fabActions directives
	      vm.open = function() {
	        $scope.$apply('vm.isOpen = true');
	      };

	      vm.close = function() {
	        $scope.$apply('vm.isOpen = false');
	      };

	      setupDefaults();
	      setupListeners();
	      setupWatchers();

	      // Set our default variables
	      function setupDefaults() {
	        // Set the default direction to 'down' if none is specified
	        vm.direction = vm.direction || 'down';

	        // Set the default to be closed
	        vm.isOpen = vm.isOpen || false;
	      }

	      // Setup our event listeners
	      function setupListeners() {
	        $element.on('mousedown', function(){
	        	if(vm.isOpen){
	        		vm.close();
	        	} else {
	        		vm.open();
	        	}
	        });
	      }

	      // Setup our watchers
	      function setupWatchers() {
	        // Watch for changes to the direction and update classes/attributes
	        $scope.$watch('vm.direction', function(newDir, oldDir) {
	          // Add the appropriate classes so we can target the direction in the CSS
	          $animate.removeClass($element, 'md-' + oldDir);
	          $animate.addClass($element, 'md-' + newDir);
	        });


	        // Watch for changes to md-open
	        $scope.$watch('vm.isOpen', function(isOpen) {
	          var toAdd = isOpen ? 'md-is-open' : '';
	          var toRemove = isOpen ? '' : 'md-is-open';

	          $animate.setClass($element, toAdd, toRemove);
	        });
	      }
	    }];

	    return $delegate;
    });
});