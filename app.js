// (function(angular){
//     'use strict';

var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'AboutController',
            controllerAs: 'about'
        })
        .when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'contact'
        })
        .otherwise({
            redirectTo: '/'
        });

});
// })(window.angular);

