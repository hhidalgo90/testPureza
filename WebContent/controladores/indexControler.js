/**
 * 
 */
var miAppAngular = angular.module('testPurezaApp',[]);


(function ($scope){
	miAppAngular.controller("indexControler", indexControler);
	
	function indexControler($scope,$http){
	
		console.log("antes de obtener las preguntas");

		$http({
        url: 'http://localhost:8080/testPurezaWeb/rest/testPureza/obtenerPreguntas',
        dataType: 'json',
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
	    }).success(function(response){
	        $scope.response = response;
	    }).error(function(error){
	        $scope.error = error;
	    });
			console.log("despues de obtener las preguntas: " + $scope.preguntas);
		};

})();
