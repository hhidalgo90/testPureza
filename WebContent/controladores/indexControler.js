/**
 * 
 */
var miAppAngular = angular.module('testPurezaApp',[]);


(function ($scope){
	miAppAngular.controller("indexControler", indexControler);
	
	function indexControler($scope,$http){
	
		 $scope.nombrePadre = "NombrePadre";
		 
		 $scope.nombreHijo = "NombreHijo";
		 
		 $scope.nombreNieto = "NombreNieto";
		 
		 $scope.nombres = ["Hector","Andres","Hidalgo","Espinoza"];
		 
		 //agregar nuevo campo a arreglo.
		 
		 $scope.agregar = function agregarNombre(){
			 $scope.nombres.push($scope.nuevoNombre);
			 $scope.nuevoNombre = "";
		};
		
		//eliminar campo de arreglo
		$scope.eliminar = function eliminarNombre(){
			 $scope.nombres.pop($scope.nombre);
		};
		
		$scope.clubes = [
			{"Nombre": "Colo-Colo", "Titulos" : "30"},
			{"Nombre": "U. De Chile", "Titulos" : "15"},
			{"Nombre": "U. Catolica", "Titulos" : "11" }
		];
			 
		$scope.obtenerPreguntas = function obtenerPreguntasRest(){
		console.log("antes de obtener las preguntas");
    	var url = "http://localhost:8080/testPurezaWeb/rest/testPureza/obtenerPreguntas";
            
         var req = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': "application/json"
                }
            };
             $http.get(url).
        	then(function(response) {
            $scope.greeting = response.data;
        });
		};
	};

})();
