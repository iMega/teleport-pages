var teleportApp = angular.module('teleportApp', ['ngRoute'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{|').endSymbol('|}');
});

teleportApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});

teleportApp.controller('signupCtrl', ['$http', '$location', function ($http, $location) {
    this.sendInvite = function () {
        this.invite = true;
        $http.get('http://a.imega.club/activate/invite/' + this.email);
    };

    this.activate = function () {
        if ($location.search().hasOwnProperty('activate')) {
            var token = $location.search()['activate'];
            $http.get('http://a.imega.club/activate/account/' + token);
        }
    }
}]);
