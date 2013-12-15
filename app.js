'use strict';

var app = angular.module('sc', ['ng', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', { controller: TrackController, templateUrl: 'track.html' });
});

app.factory('TrackService', function(){
  var i = 0;
  return {
    next: function() {
      return {
        name: "some track",
        id: i++
      }
    }    
  }
});

app.directive('player', function(){
  return {
    restrict: 'E',
    template: '<div class="player">track id: {{ track.id }}<pre>{{ track | json }}</pre></div>',
    scope: {
      track: '='
    },
    link: function($scope, $element, $attrs) {

    }
  };
});

function TrackController($scope, TrackService) {
  $scope.currentTrack = TrackService.next();
  $scope.shake = function() {
    $scope.currentTrack = TrackService.next();
  }
}