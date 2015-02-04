// Ionic Starter App
define(['angularAMD', 'angular-ionic', 'angular-animate', 'angular-sanitize', 'angular-ui-router'], function(angularAMD) {

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  var app = angular.module('starter', ['ionic', 'ui.router']);
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', angularAMD.route({
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'HomeCtrl'
    }))
    .state('app.search', angularAMD.route({
      url: "/search",
      views: {
        'menuContent': {
          templateUrl: "templates/search.html"
        }
      }
    }))

    .state('app.browse', angularAMD.route({
      url: "/browse",
      views: {
        'menuContent': {
          templateUrl: "templates/browse.html"
        }
      }
    }))
      .state('app.playlists', angularAMD.route({
        url: "/playlists",
        views: {
          'menuContent': angularAMD.route({
            templateUrl: "templates/playlists.html",
            controller: 'PlaylistsCtrl'
          })
        }
      }))

    .state('app.single', angularAMD.route({
      url: "/playlists/:playlistId",
      views: {
        'menuContent': angularAMD.route({
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        })
      }
    }));
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
  });

  return angularAMD.bootstrap(app);
});
