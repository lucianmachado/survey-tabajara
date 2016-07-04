(function(ng, _) {

    'use strict';

    ng.module('survey-votation-tabajara')
        .controller('RestaurantCtrl', RestaurantCtrl)
        .controller('SingleRestaurantCtrl', SingleRestaurantCtrl);

    function RestaurantCtrl($scope, $state, Restaurants, RestaurantDefinition, SailsResourceService) {
        var resourceService = new SailsResourceService('restaurants'.toLowerCase());
        
        $scope.restaurants = Restaurants;
        $scope.model_def = RestaurantDefinition.originalElement;
        $scope.restaurant = {};

        $scope.remove = function remove(restaurant) {
            restaurant = restaurant || $scope.restaurant;
            if (window.confirm('Are you sure you want to delete this restaurant?')) {
                return resourceService.remove(restaurant, $scope.restaurants);
            }
        };

        $scope.save = function save(restaurant) {
            restaurant = restaurant || $scope.restaurant;
            return resourceService.save(restaurant, $scope.restaurants)
                .then(function() {
                    $state.go('^.list');
                }, function(err) {
                    console.error('An error occured: ' + err);
                });
        };
    }

    function SingleRestaurantCtrl($scope, $stateParams, Restaurants, RestaurantDefinition) {
        // coerce string -> int
        $stateParams.id = _.parseInt($stateParams.id);
        if (!_.isNaN($stateParams.id)) {
            $scope.restaurant = _.find(Restaurants, {
                id: $stateParams.id
            });
        }
    }

})(
    window.angular,
    window._
);
