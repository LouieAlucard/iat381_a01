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
		{'Paper': ['news', 'cardboard']}, 
		{'Food': 'Food'}, 
		{'Container': 'Container'}, 
		{'Composite': 'Composite'}];
	}
]);