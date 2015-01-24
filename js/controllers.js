var recycleControllers = angular.module('recycleControllers', []);

recycleControllers.controller('RecycleListCtrl', function ($scope) {
	$scope.recycleList = [
		{'name': 'Paper'}, 
		{'name': 'Food'}, 
		{'name': 'Container'}, 
		{'name': 'Composite'}];
});


recycleControllers.controller('CategoryItemCtrl', function ($scope) {
	$scope.paperList = ['newspaper', 'sketch paper'];
	$scope.foodList = ['meat', 'vegitable'];
	$scope.containerList = ['can', 'bottle'];
	$scope.compositeList = ['trash', 'other'];
});