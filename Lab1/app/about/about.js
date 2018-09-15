'use strict';

const aboutModule = angular.module('lab1App.about', ['ngRoute']);

aboutModule.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: 'about/about.html',
		controller: 'aboutController'
	});
}]);

aboutModule.controller('aboutController', ['$scope', '$http', 'storage', function ($scope, $http, storage) {

}]);
