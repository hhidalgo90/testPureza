/**
 * 
 */

var navegar = angular.module("navegacion", ['ngRoute']);

navegar.config(function($routeProvider) {
	$routeProvider.when('/', {
	templateUrl:'prueba.html',
	controler: 'paisesCtrl'
	}).
	$routeProvider.when('/chupalo', {
		templateUrl:'prueba.html',
		controler: 'paisesCtrl'
		}).
	otherwise({
		redirecTo: '/'
	});
});

navegar.controller("paisesCtrl", function($scope, $http) {
	$http.get("json/paises.json").success(function(data){
		$scope.paises = data;
	});
	
});