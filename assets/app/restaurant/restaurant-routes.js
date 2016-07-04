(function(ng) {
    
    'use strict';

    ng.module('survey-votation-tabajara')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/restaurants', '/restaurants/list');

            $stateProvider
                .state('restaurants', {
                    abstract: true,
                    url: '/restaurants',
                    controller: 'RestaurantCtrl',
                    template: '<div ui-view></div>',
                    resolve: {
                        RestaurantDefinition : function getRestaurantDefinition (SailsResourceDefinitions) {
                            return SailsResourceDefinitions.get('restaurants');
                        },
                        Restaurants: function restaurantsListResolve(Restangular) {
                            return Restangular.all('restaurants').getList();
                        }
                    },
                })
                .state('restaurants.list', {
                    url: '/list',
                    templateUrl: 'app/restaurant/restaurant-list.html'
                })
                .state('restaurants.add', {
                    url: '/add',
                    templateUrl: 'app/restaurant/restaurant-add-edit.html'
                })
                .state('restaurants.info', {
                    url: '/info/:id',
                    controller: 'SingleRestaurantCtrl',
                    templateUrl: 'app/restaurant/restaurant-info.html'
                })
                .state('restaurants.edit', {
                    url: '/edit/:id',
                    controller: 'SingleRestaurantCtrl',
                    templateUrl: 'app/restaurant/restaurant-add-edit.html'
                });
        });
})(
    window.angular
);
