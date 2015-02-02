recycleApp.controller('CategoryItemCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$scope.category = $routeParams.category;
		
		//Nav Section
		$scope.recycleList = [
			{'name': 'Mixed Paper', 'descrip': 'mixpaper a lot', 'imgurl': 'paper'}, 
			{'name': 'Food',  'descrip': 'food can kill u', 'imgurl': 'food'}, 
			{'name': 'Container', 'descrip': 'container can kill u 2', 'imgurl': 'container'}, 
			{'name': 'Electronic Product', 'descrip': 'they kill earth', 'imgurl': 'device'}
		];

		if ($routeParams.category == "Mixed Paper") {
			$scope.navGrid0 = "col-xs-9";
			$scope.navText0 = true;
			$scope.navGrid1 = "col-xs-1";
			$scope.navText1 = false;
			$scope.navGrid2 = "col-xs-1";
			$scope.navText2 = false;
			$scope.navGrid3 = "col-xs-1";
			$scope.navText3 = false;
		} else if ($routeParams.category == "Food") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navText0 = false;
			$scope.navGrid1 = "col-xs-9";
			$scope.navText1 = true;
			$scope.navGrid2 = "col-xs-1";
			$scope.navText2 = false;
			$scope.navGrid3 = "col-xs-1";
			$scope.navText3 = false;
		} else if ($routeParams.category == "Container") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navText0 = false;
			$scope.navGrid1 = "col-xs-1";
			$scope.navText1 = false;
			$scope.navGrid2 = "col-xs-9";
			$scope.navText2 = true;
			$scope.navGrid3 = "col-xs-1";
			$scope.navText3 = false;
		} else if ($routeParams.category == "Electronic Product") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navText0 = false;
			$scope.navGrid1 = "col-xs-1";
			$scope.navText1 = false;
			$scope.navGrid2 = "col-xs-1";
			$scope.navText2 = false;
			$scope.navGrid3 = "col-xs-9";
			$scope.navText3 = true;
		}
		
		
		//Item Section
		$http.get('../iat381_a01/src/recycle.json').success(function(data) {
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
		$scope.orderProp = 'name';
		$scope.itemColor = $routeParams.category.replace(/\s+/g, '');
		
	}
]);