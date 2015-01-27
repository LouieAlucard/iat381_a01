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
		{'cg':'Paper', 'item':['news','cardboard']}, 
		{'cg':'Food', 'item':'meat'}, 
		{'cg':'Container', 'item':'can'}, 
		{'cg':'Composite', 'item':'trash'}];
	}
]);