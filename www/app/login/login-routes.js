(function(ng) {

    'use strict';

    ng.module('survey-votation-tabajara')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginCtrl',
                    templateUrl: 'app/login/login.html',
                })
        });
})(
    window.angular
);
