'use strict';

// Declare app level module which depends on views, and components
var bibleApp = angular.module('bibleApp', ['bibleControllers','ngRoute','ngMaterial'])


bibleApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/bible', {
    	templateUrl:'partials/bible-list.html',
    	controller:'bibleCtrl'
    }).
    when('/bible/:bookName',{
    	templateUrl:'partials/bible-details.html',
    	controller:'bibleDetailsCtrl'
    }).
    otherwise({redirectTo: '/bible'});
  }]);
