var recycleControllers = angular.module('recycleControllers', []);

recycleControllers.controller('RecycleListCtrl', function ($scope) {
	$scope.recycleList = ['Paper', 'Food', 'Container', 'Composite'];
	$scope.paperList = ['newspaper', 'sketch paper'];
	$scope.foodList = ['meat', 'vegitable'];
	$scope.containerList = ['can', 'bottle'];
	$scope.compositeList = ['trash', 'other'];
});


recycleControllers.controller('CategoryItemCtrl', function ($scope) {
	$scope.paperList = ['newspaper', 'sketch paper'];
	$scope.foodList = ['meat', 'vegitable'];
	$scope.containerList = ['can', 'bottle'];
	$scope.compositeList = ['trash', 'other'];
});