var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});


angular.module('homepage.controllers', []).
controller('driversController', function($scope) {
        $scope.title = "La référence du meme";
        $scope.firstName = "John";
        $scope.lastName = "Doe";

        $scope.auteursListe= [
            {
                identite : {
                    prenom : 'Corentin',
                    nom : 'biscotto'
                }
            },
            {
                identite: {
                    prenom : 'Luke',
                    nom : 'fragilos'
                }
            }
        ];

        
});