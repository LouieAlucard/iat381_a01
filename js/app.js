var recycleApp = angular.module('recycleApp', [
	'ngRoute',
	'RecycleListCtrl'
]);

recycleApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/main', {
				templateUrl: 'views/category.html',
				controller: 'RecycleListCtrl'
			}).
			otherwise({
				redirectTo: '/main'
			});
	}
]);

