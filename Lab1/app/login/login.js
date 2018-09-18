'use strict';

const GoogleSignInScriptId = 'google_sign_in';
const GoogleSignInClientId = '844253866537-m3fj8q71e8qllk0j6rv78pd5u9rcvlfl.apps.googleusercontent.com';

const loginModule = angular.module('lab1App.login', ['ngRoute']);

loginModule.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginController'
	});
}]);

loginModule.controller('loginController', ['$window', '$location', '$scope', '$http', 'storage', function ($window, $location, $scope, $http, storage) {
	const console = $window.console;
	const document = $window.document;

	$scope.onSuccess = function (googleUser) {
		console.log(googleUser);
		var profile = googleUser.getBasicProfile();
		console.log(profile);
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
		storage.local.loggedIn = true;
		$location.path('/home');
	};

	$scope.onFailure = function(error) {
		console.log(error);
	};

	$scope.signOut = function() {
		const gapi = $window.gapi;
		const auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
			console.log('User signed out.');
			storage.local.loggedIn = false;
		});
	};

	$scope.onLoad = function () {
		const gapi = $window.gapi;
		console.log('onload', gapi);

		gapi.load('auth2', function () {
			gapi.auth2.init({
				client_id: GoogleSignInClientId,
				cookie_policy: 'none',
			});

			gapi.signin2.render('my-signin2', {
				'longtitle': true,
				'onsuccess': $scope.onSuccess,
				'onfailure': $scope.onFailure
			});
		});
	};

	if (!document.getElementById(GoogleSignInScriptId)) {
		const script = document.createElement('script');
		script.id = GoogleSignInScriptId;
		script.type = 'application/javascript';
		script.async = true;
		script.defer = true;
		script.src = 'https://apis.google.com/js/platform.js';
		script.onload = $scope.onLoad;
		document.head.appendChild(script);
	} else {
		$scope.onLoad();
	}

}]);
