<<<<<<< HEAD
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
=======
recycleApp.controller('CategoryItemCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$scope.category = $routeParams.category;
		
		$http.get('../a01/src/recycle.json').success(function(data) {
			$scope.recycleData = data;
		});
		
		
		$scope.selectItem = function(items) {
			var result = [];
			angular.forEach(items, function(value, key) {
>>>>>>> louieTest
				if (key == $routeParams.category) {
					result = value;
				}
			});
<<<<<<< HEAD
=======
			console.log(result);
>>>>>>> louieTest
			return result;
		}
		
		
	}
]);