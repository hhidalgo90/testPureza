var miAplicacion = angular.module("paises", []);



(function($scope){
miAplicacion.controller("paisesCtrl",paisesCtrl);

function paisesCtrl($scope, $http) {
	$http.post("http://localhost:8080/ServiciosRestWeb/svcRestTito/com/tito/publico/obtenerEquiposGanadores").success(function(data){
		$scope.paises = data;
	});

	$http.post("http://localhost:8080/ServiciosRestWeb/svcRestTito/com/tito/publico/obtenerEquiposGanadores").error(function(data){
		alert("fallo todo loco wom");
	});
		
	//variable para ordenar por nombre o titulos en la pagina.
	$scope.orden = "Nombre";
	$scope.reverse = true;
};

})();