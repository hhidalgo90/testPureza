/**
 * 
 */
var app = angular.module("testPurezaApp", ['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
	$routeProvider
	.when('/', {
	templateUrl:'pages/portada.html',
	controler: 'HomeController',
	})
	.when('/prueba', {
		templateUrl:'pages/prueba.html',
		controler: 'HomeController',
		})
	.otherwise({
		redirecTo: '/portada.html'
	});
});

app.controller("paisesCtrl", function($scope, $http) {
	$http.get("json/paises.json").success(function(data){
		$scope.paises = data;
	});
	
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
  console.log($scope.message);
});