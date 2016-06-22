(function (ng) {
  'use strict';

  ng.module('profiles')
    .config(function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'profileCards/templates/profileCards.html',
          controller: 'ProfileCardsController',
          controllerAs: 'profileCard'
        })
        .when('/inbox/:id', {
          templateUrl: 'inbox/templates/inbox.html',
          controller: 'InboxController',
          controllerAs: 'inbox'
        })
        .otherwise({
          redirectTo: '/'
        });


      $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
      });
    });
}(window.angular));
