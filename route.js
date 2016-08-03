angular.module('viewSample', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/route', {
    templateUrl: 'route.html'
  })
});
