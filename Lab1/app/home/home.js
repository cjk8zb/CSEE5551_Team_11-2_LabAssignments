'use strict';

const voices = {
	"en": "en-US_AllisonVoice",
	"fr": "fr-FR_ReneeVoice",
	"ja": "ja-JP_EmiVoice",
	"pt": "pt-BR_IsabelaVoice",
	"es": "es-US_SofiaVoice",
};

const speechModels = {
	"en": "en-US_BroadbandModel",
	"fr": "fr-FR_BroadbandModel",
	"ja": "ja-JP_BroadbandModel",
	"pt": "pt-BR_BroadbandModel",
	"es": "es-ES_BroadbandModel"
};

const homeModule = angular.module('lab1App.home', ['ngRoute']);

homeModule.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'homeController'
	});
}]);

homeModule.controller('homeController', ['$scope', '$http', 'storage', function ($scope, $http, storage) {
	$scope.fromLanguage = 'en';
	$scope.toLanguage = 'es';
	$scope.listenButtonText = "Listen";
	$scope.listenButtonDisabled = false;
	$scope.listenButtonClass = "btn-primary";

	$scope.buildUrl = function ({protocol = 'https', host, port = 0, path = "", query = {}}) {
		const portStr = port ? `:${port}` : '';
		const queryParts = Object.entries(query)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
		const queryString = queryParts.length ? `?${queryParts.join('&')}` : '';
		if (typeof path !== "string" && Array.isArray(path)) {
			path = path.map(encodeURIComponent).join('/');
		}
		return `${protocol}://${host}${portStr}/${path}${queryString}`;
	};

	// Token management.

	$scope.getToken = function (serviceName) {
		if ($scope.validToken(serviceName)) {
			return Promise.resolve(storage[serviceName].token);
		}

		return $scope.loadToken(serviceName);
	};

	$scope.validToken = function (serviceName) {
		return storage[serviceName] && storage[serviceName] && storage[serviceName].token && Date.now() < storage[serviceName].expires;
	};

	$scope.loadToken = function (serviceName) {
		return $http.get($scope.buildUrl({
			protocol: 'http',
			host: 'localhost',
			port: 3000,
			path: ['token', serviceName]
		})).then(results => {
			storage[serviceName] = results.data;
			return storage[serviceName].token;
		});
	};

	$scope.listen = function () {
		if (!$scope.fromLanguage) {
			return;
		}

		$scope.listenButtonDisabled = true;

		if ($scope.mediaRecorder) {
			console.info('stop listening');
			$scope.mediaRecorder.stop();
			$scope.mediaRecorder = null;
			$scope.translate();
			$scope.listenButtonText = 'Listen';
			$scope.listenButtonDisabled = false;
			$scope.listenButtonClass = "btn-primary";
		} else {
			console.info('start listening');
			return $scope.getToken('speechToText').then(token => $scope.buildUrl({
				protocol: 'wss',
				host: 'stream.watsonplatform.net',
				path: 'speech-to-text/api/v1/recognize',
				query: {
					'watson-token': token,
					model: speechModels[$scope.fromLanguage]
				}
			})).then(url => {
				console.info('listening - url', url);
				getStream().then(stream => {
					console.info('listening - stream', stream);
					openSocket(url, $scope).then(socket => {
						console.info('listening - socket', socket);
						$scope.mediaRecorder = getMediaRecorder(stream, socket);
						console.info('listening - mediaRecorder', $scope.mediaRecorder);
						$scope.listenButtonText = 'Stop';
						$scope.listenButtonDisabled = false;
						$scope.listenButtonClass = "btn-danger";
						$scope.$apply();
						$scope.mediaRecorder.start(1000);
					});
				});
			});

		}
	};

	$scope.speak = function () {
		if (!($scope.toLanguage && $scope.textIn)) {
			return;
		}

		return $scope.getToken('textToSpeech').then(token => $scope.buildUrl({
			host: 'stream.watsonplatform.net',
			path: 'text-to-speech/api/v1/synthesize',
			query: {
				accept: 'audio/mp3',
				voice: voices[$scope.toLanguage],
				text: $scope.textOut,
				'watson-token': token
			}
		})).then(url => {
			const audio = new Audio(url);
			return audio.play();
		});
	};

	$scope.translate = function () {
		if (!($scope.fromLanguage && $scope.toLanguage && $scope.textIn) || $scope.fromLanguage === $scope.toLanguage) {
			console.warn('invalid parameters');
			return;
		}

		return $http.get($scope.buildUrl({
			protocol: 'http',
			host: 'localhost',
			port: 3000,
			path: ['translate', $scope.fromLanguage, $scope.toLanguage, $scope.textIn]
		})).then(results => {
			console.info('translate results', results);
			const {data} = results;
			console.log('data', data);
			const {data: {translations}} = results;
			console.log('translations', translations);
			const {data: {translations: [first]}} = results;
			console.log('first', first);
			const {data: {translations: [{translation}]}} = results;
			console.log('translation', translation);
			if (translation) {
				$scope.textOut = translation;
			}
		});
	};

}]);

function getMediaRecorder(stream, socket) {
	const mediaRecorder = new MediaRecorder(stream);

	mediaRecorder.onstart = function (e) {
		socket.send(JSON.stringify({
			'action': 'start',
			'content-type': 'audio/webm;codecs=opus',
			"interim_results": true
		}));
	};

	mediaRecorder.ondataavailable = function (e) {

		socket.send(e.data);
	};

	mediaRecorder.onstop = function (e) {
		socket.send(JSON.stringify({'action': 'stop'}));
		socket.close();
	};

	return mediaRecorder;
}

function openSocket(url, scope) {
	return new Promise((resolve, reject) => {
		const websocket = new WebSocket(url);
		const partial = [];
		websocket.onopen = function (evt) {
			resolve(websocket);
		};
		websocket.onclose = function (evt) { console.info('close', evt); };
		websocket.onmessage = function (evt) {
			const message = JSON.parse(evt.data);
			const {results} = message;
			if (results) {
				const result = message.results[0];
				const transcript = result.alternatives[0].transcript;
				if (result.final) {
					partial.push(transcript);
					scope.textIn = partial.join();
					scope.translate();
				} else {
					scope.textIn = partial.join() + transcript;
				}
				scope.$apply();
			}
		};
		websocket.onerror = function (evt) { console.error('error', evt); };
	});
}

function getStream() {
	return new Promise((resolve, reject) => {
		navigator.getUserMedia({audio: true}, resolve, reject);
	});
}
