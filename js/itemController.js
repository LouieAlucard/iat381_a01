recycleApp.controller('CategoryItemCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$scope.category = $routeParams.category;
		
		$http.get('../a01/src/recycle.json').success(function(data) {
			$scope.recycleData = data;
		});
		
		
		$scope.selectItem = function(items) {
			var result = [];
			angular.forEach(items, function(value, key) {
				if (key == $routeParams.category) {
					result = value;
				}
			});
			return result;
		}
		
		
	}
]);