'use strict';

var xmpApp = angular.module('xmp.SignIn', [
  'ngRoute',
	'spaControllers',
	'xmp.directives',
  	'xmp.controllers',
  	'xmp.services'
])

.config(['$routeProvider',function($routeProvider) {
 	 
 	$routeProvider
    .when('/', {
      controller:'XMPAnonymousView',
      templateUrl:'nonGoogle.html'
    })
    .when('/register/', {
      controller:'XMPAnonymousView',
      templateUrl:'SignWithGoogle.html'
    })
    .otherwise({
      redirectTo:'/register/'
    });
}])

.config(['xmpResourceProvider', function(inProvider) {
	// 	xmpcfg.access is defined externally at the xmpcfg.js
    inProvider.configure({
      access:xmpcfg.access
    });
}]);

var spaControllers = angular.module('spaControllers', [])
 .controller('main', ['$scope',function ($scope) {

  // nothing!
}]);
