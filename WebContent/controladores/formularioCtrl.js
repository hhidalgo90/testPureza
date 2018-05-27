var formulario = angular.module('formdata', []);

(function($scope){
formulario.controller('formularioCtrl',formularioCtrl);

function formularioCtrl($scope,$http){

$scope.nombre = "";
$scope.apellido = "";
$scope.rut = "";
$scope.correo = "";
$scope.edad = "";

$scope.validarForm = function validarFormulario(){

if ($scope.nombre == "" || $scope.apellido == "" || $scope.rut == ""
	|| $scope.correo == "" || $scope.edad == "") {
	alert("Debe ingresar todos los campos!!");
}
else{
$scope.enviarFormulario = function enviarFormularioARest(data){
    console.log("antes de enviar los datos" + $scope.nombre, $scope.apellido, $scope.rut);
    var url = "http://localhost:8080/ServiciosRestWeb/svcRestTito/com/tito/publico/guardarFormulario";

            data = {
                "nombre": $scope.nombre,
                "apellido": $scope.apellido,
                "rut": $scope.rut,
                "correo": $scope.correo,
                "edad": $scope.edad
            };
         var req = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type': "application/json"
                },
                data : data
            };
            return $http(req).success(function(data){
        console.log("envie los datos");
    });

        };
        console.log($scope.nombre, $scope.apellido, $scope.rut);
};
}

};//fin funcinon controlador


})();