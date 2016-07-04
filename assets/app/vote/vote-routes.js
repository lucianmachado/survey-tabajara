(function(ng) {
    
    'use strict';

    ng.module('survey-votation-tabajara')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/votes', '/votes/list');

            $stateProvider
                .state('votes', {
                    abstract: true,
                    url: '/votes',
                    controller: 'VoteCtrl',
                    template: '<div ui-view></div>',
                    resolve: {
                        VoteDefinition : function getVoteDefinition (SailsResourceDefinitions) {
                            return SailsResourceDefinitions.get('votes');
                        },
                        Votes: function votesListResolve(Restangular) {
                            return Restangular.all('votes').getList();
                        }
                    },
                })
                .state('votes.list', {
                    url: '/list',
                    templateUrl: 'app/vote/vote-list.html'
                })
                .state('votes.add', {
                    url: '/add',
                    templateUrl: 'app/vote/vote-add-edit.html'
                })
                .state('votes.info', {
                    url: '/info/:id',
                    controller: 'SingleVoteCtrl',
                    templateUrl: 'app/vote/vote-info.html'
                })
                .state('votes.edit', {
                    url: '/edit/:id',
                    controller: 'SingleVoteCtrl',
                    templateUrl: 'app/vote/vote-add-edit.html'
                });
        });
})(
    window.angular
);
