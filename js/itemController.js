recycleApp.controller('CategoryItemCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.category = $routeParams.category;
		
		$scope.categoryItem = {
		'Paper': ['newspaper', 'cardboard', 'Magazines'], 
		'Food': ['meat', 'vegetable', 'fish'], 
		'Container': ['steel can', 'glass bottle', 'Aluminum', 'plastic bottles'], 
		'Composite': ['trash', 'Computers']};
		
		$scope.postItem = function(categoryItem) {
			var result = [];
			angular.forEach(categoryItem, function(value, key) {
				if (key == $routeParams.category) {
					result = value;
				}
			});
			return result;
		}
		
		
	}
]);