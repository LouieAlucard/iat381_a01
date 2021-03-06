var recycleApp = angular.module('recycleApp', [
	'ngRoute',
	'ngAnimate',
	'ngTouch',
]);

recycleApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/main', {
				templateUrl: 'views/home.html'
			}).
			when('/category', {
				templateUrl: 'views/category.html',
				controller: 'RecycleListCtrl'
			}).
			when('/:category', {
				templateUrl: 'views/category_item.html',
				controller: 'CategoryItemCtrl'
			}).
			otherwise({
				redirectTo: '/main'
			});
	}
]);

