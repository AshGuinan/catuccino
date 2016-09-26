angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/cats', {
			templateUrl: 'views/cats.html',
			controller: 'CatController'
		})

		.when('/cakes', {
			templateUrl: 'views/cakes.html',
			controller: 'CakeController'	
		});

	$locationProvider.html5Mode(true);

}]);