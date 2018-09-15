'use strict';

const contactModule = angular.module('lab1App.contact', ['ngRoute']);

contactModule.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/contact', {
		templateUrl: 'contact/contact.html',
		controller: 'contactController'
	});
}]);

contactModule.controller('contactController', ['$scope', '$http', 'storage', function ($scope, $http, storage) {


}]);
