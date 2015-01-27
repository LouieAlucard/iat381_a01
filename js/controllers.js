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
		
		$scope.categoryItem = [
		{'category':'Paper', 'item':'news', 'item':'cardboard'}, 
		{'category':'Food', 'item':'meat'}, 
		{'category':'Container', 'item':'can'}, 
		{'category':'Composite', 'item':'trash'}];
	}
]);