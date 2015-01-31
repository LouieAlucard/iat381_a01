
recycleApp.controller('RecycleListCtrl', function ($scope) {
	$scope.recycleList = [
		{'name': 'Mixed Paper'}, 
		{'name': 'Food'}, 
		{'name': 'Container'}, 
		{'name': 'Electronic Product'}
	];
	
	$scope.navGrid0 = "col-xs-9";
	$scope.navGrid1 = "col-xs-1";
	$scope.navGrid2 = "col-xs-1";
	$scope.navGrid3 = "col-xs-1";
    
    $scope.changeGrid = function(key){
		if (key == 0 && $scope.navGrid0 === "col-xs-1") {
			$scope.navGrid0 = "col-xs-9";
			$scope.navGrid1 = "col-xs-1";
			$scope.navGrid2 = "col-xs-1";
			$scope.navGrid3 = "col-xs-1";
		} else if (key == 1 && $scope.navGrid1 === "col-xs-1") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navGrid1 = "col-xs-9";
			$scope.navGrid2 = "col-xs-1";
			$scope.navGrid3 = "col-xs-1";
		} else if (key == 2 && $scope.navGrid2 === "col-xs-1") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navGrid1 = "col-xs-1";
			$scope.navGrid2 = "col-xs-9";
			$scope.navGrid3 = "col-xs-1";
		} else if (key == 3 && $scope.navGrid3 === "col-xs-1") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navGrid1 = "col-xs-1";
			$scope.navGrid2 = "col-xs-1";
			$scope.navGrid3 = "col-xs-9";
		}
    };
});


