'use strict';

// Declare app level module which depends on views, and components
angular.module('lab1App', [
	'ngRoute',
	'lab1App.home',
	'lab1App.about',
	'lab1App.contact'
])

.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({redirectTo: '/home'});
}]);
