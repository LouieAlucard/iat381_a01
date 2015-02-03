recycleApp.controller('CategoryItemCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$scope.category = $routeParams.category;
		
		//Nav Section
		$scope.recycleList = [
			{'name': 'Mixed Paper', 
             'subtitle': 'newsprints, paper product',
             'descrip': 'Flatten all boxes and remove plastic liners. Please cut cardboard into small pieces. Oh! Don’t forget to remove food and paper from pizza boxes.', 
             'imgurl': 'paper'}, 
			{'name': 'Green Bin',  
             'subtitle': 'Extra food scraps and yard waste',
             'descrip': 'You can put all your food scraps, plate scrapings and food-soiled paper in your Green Bin for weekly collection.', 
             'imgurl': 'food'}, 
			{'name': 'Recyclable Container',
             'subtitle': 'glass, metal, paper & plastic containers',
             'descrip': 'Rinse all containers clean, and discard any lids that aren’t plastic, metal, or aluminium.', 
             'imgurl': 'container'}, 
			{'name': 'Electronic Product', 
             'subtitle': 'newsprints, paper product',
             'descrip': 'they kill earth', 
             'imgurl': 'device'}
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
		} else if ($routeParams.category == "Green Bin") {
			$scope.navGrid0 = "col-xs-1";
			$scope.navText0 = false;
			$scope.navGrid1 = "col-xs-9";
			$scope.navText1 = true;
			$scope.navGrid2 = "col-xs-1";
			$scope.navText2 = false;
			$scope.navGrid3 = "col-xs-1";
			$scope.navText3 = false;
		} else if ($routeParams.category == "Recyclable Container") {
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