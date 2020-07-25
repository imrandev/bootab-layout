'use strict';

// Declare app level module which depends on views, and core components
var appController = angular.module('app.controllers', []);
var modules = [
    'ngRoute',
    'bootab.directives',
    'app.controllers',
]

var bootApp = angular.module('myApp', modules);

bootApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/bootabApp'});
}]);

appController.controller("IndexCtrl", function($scope) {
    $scope.selectedTabIndex = 0;
});

appController.controller("tabController", function($scope) {

});

appController.controller("photosCtrl", function($scope) {

});

appController.controller("videosCtrl", function($scope) {

});

