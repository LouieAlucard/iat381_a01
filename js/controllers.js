var recycleControllers = angular.module('recycleControllers', []);

recycleControllers.controller('RecycleListCtrl', function ($scope) {
	$scope.recycleList = [
		{'name': 'Paper'}, 
		{'name': 'Food'}, 
		{'name': 'Container'}, 
		{'name': 'Composite'}];
});


recycleControllers.controller('CategoryItemCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.category = $routeParams.category;
		
		$scope.categoryItem = {
		'Paper': ['news','cardboard'], 
		'Food': ['s','s'], 
		'Container': ['2','2'], 
		'Composite': ['3','4']};
		
		$scope.postItem = function(categoryItem) {
			var result = {};
			angular.forEach(categoryItem, function(value, key) {
				if (key == $routeParams.category) {
						result = value;
				}
			});
			return result;
		}
		
		console.log(result);
	}
]);