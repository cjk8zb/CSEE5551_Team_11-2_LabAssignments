'use strict';

// Declare app level module which depends on views, and components
angular.module('lab1App', [
	'ngRoute',
	'lab1App.home',
	'lab1App.about',
	'lab1App.contact',
	'lab1App.login'
])

	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.otherwise({redirectTo: '/home'});
	}])

	.factory('storage', ['$window', function ($window) {

		console.info('looking for local storage');
		try {
			const key = 'app.storage.local.testing';
			$window.localStorage.setItem(key, key);
			$window.localStorage.removeItem(key);
		} catch (e) {
			// Use in-memory storage as a fail-safe.
			console.warn('local storage not available');
			return {local: {}, session: {}};
		}

		const handler = {
			get: function (obj, prop) {
				const value = obj[prop];
				return value && JSON.parse(value);
			},
			set: function (obj, prop, value) {
				obj[prop] = JSON.stringify(value);
				return true;
			}
		};

		return {
			local: new Proxy($window.localStorage, handler),
			session: new Proxy($window.sessionStorage, handler),
		};
	}])

	.run(['$rootScope', '$location', 'storage', function ($rootScope, $location, storage) {
		console.log('woot');
		$rootScope.$on('$routeChangeStart', function (event, next, current) {
			console.log('woot 2', event, next, current);

			if (!storage.local.loggedIn) {
				if (current && current.controller === 'loginController') {
					event.preventDefault();
				} else if (next.controller !== 'loginController') {
					console.log('woot 3');
					$location.path('/login');
				}
			} else {
				console.log('woot 4');
			}
		});
	}]);
