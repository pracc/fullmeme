var app = angular.module('homepage', [
    'homepage.controllers', 'myApp', "ngRoute"
]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : "home.php"
        })
        .when('/memeliste', {
            templateUrl : "memeliste.php"
        })
        .when('/connexion', {
            templateUrl : "connexion.php"
        });
});