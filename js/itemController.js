recycleApp.controller('CategoryItemCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$scope.category = $routeParams.category;
		
		//Nav Section
		$scope.recycleList = [
			{'name': 'Mixed Paper', 
             'subtitle': 'newsprints & paper products',
             'descrip': 'Flatten all boxes and remove plastic liners. Cut cardboard into small pieces. Flatten all boxes and remove plastic liners.',
            'imgurl': 'paper'}, 
			{'name': 'Green Bin',  
             'subtitle': 'Extra food scraps and yard waste',
             'descrip': 'You can put all your food scraps, plate scrapings and food-soiled paper in your Green Bin for weekly collection. Check the time!',
            'imgurl': 'apple'}, 
			{'name': 'Recyclable Container',
             'subtitle': 'glass, metal, paper & plastic',
             'descrip': 'Rinse all containers clean, and discard any lids that aren’t plastic, metal, or aluminium. Also, Rinse all containers clean.',
            'imgurl': 'container'}
		];

		if ($routeParams.category == "Mixed Paper") {
			$scope.navGrid0 = "col-xs-10";
			$scope.navText0 = true;
			$scope.navGrid1 = "col-xs-1";
			$scope.navText1 = false;
			$scope.navGrid2 = "col-xs-1";
			$scope.navText2 = false;
		} else if ($routeParams.category == "Green Bin") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navText0 = false;
			$scope.navGrid1 = "col-xs-10";
			$scope.navText1 = true;
			$scope.navGrid2 = "col-xs-1";
			$scope.navText2 = false;
		} else if ($routeParams.category == "Recyclable Container") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navText0 = false;
			$scope.navGrid1 = "col-xs-1";
			$scope.navText1 = false;
			$scope.navGrid2 = "col-xs-10";
			$scope.navText2 = true;
        }

		
		
		//Item Section
		$http.get('src/recycle.json').success(function(data) {
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