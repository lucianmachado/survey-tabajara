(function(ng) {
  'use strict';

  ng.module('survey-votation-tabajara')
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider
        .when('/', '/home')
        .when('', '/home');


      $stateProvider
        .state('home', {
          url: '/home',
          controller: 'HomeCtrl',
          templateUrl: 'app/home/home.html',
          resolve: {
            SurveyDefinition: function getSurveyDefinition(SailsResourceDefinitions) {
              return SailsResourceDefinitions.get('surveys');
            },
            Survey: function activeSurveyResolve(Restangular) {
              return Restangular.all('surveys').getList({
                isActive: true
              });
            },
            RestaurantDefinition: function getRestaurantDefinition(SailsResourceDefinitions) {
              return SailsResourceDefinitions.get('restaurants');
            },
            Restaurants: function restaurantsListResolve(Restangular) {
              return Restangular.all('restaurants').getList();
            },
            VoteDefinition : function getVoteDefinition (SailsResourceDefinitions) {
                return SailsResourceDefinitions.get('votes');
            },
            Votes: function votesListResolve(Restangular) {
                return Restangular.all('votes').getList();
            }
          },
        });
    });
})(
  window.angular,
  window._
);
