'use strict';

const homeModule = angular.module('lab1App.home', ['ngRoute']);

homeModule.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'homeController'
	});
}]);

homeModule.controller('homeController', ['$scope', '$http', 'storage', function ($scope, $http, storage) {

	$scope.submit = function() {
		console.log('submit', $scope);
		const parts = {};
		if ($scope.protocol) {
			parts.protocol = $scope.protocol;
		}
		if ($scope.host) {
			parts.host = $scope.host;
		}
		if ($scope.port) {
			parts.port = $scope.port;
		}
		if ($scope.path) {
			parts.path = $scope.path;
		}
		if ($scope.key1 && $scope.value1) {
			parts.query = {};
			parts.query[$scope.key1] = $scope.value1;
		}
		$scope.url = $scope.buildUrl(parts);
	};


    $scope.TextNSpeech = document.getElementById('TextNSpeech').value;




	$scope.buildUrl = function ({protocol = 'https', host, port = 0, path = "", query = {}}) {
		const portStr = port ? `:${port}` : '';
		const queryParts = Object.entries(query)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
		const queryString = queryParts.length ? `?${queryParts.join('&')}` : '';
		return `${protocol}://${host}${portStr}/${path}${queryString}`;
	};

}]);
