(function(ng) {
    
    'use strict';

    ng.module('survey-votation-tabajara')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/surveys', '/surveys/list');

            $stateProvider
                .state('surveys', {
                    abstract: true,
                    url: '/surveys',
                    controller: 'SurveyCtrl',
                    template: '<div ui-view></div>',
                    resolve: {
                        SurveyDefinition : function getSurveyDefinition (SailsResourceDefinitions) {
                            return SailsResourceDefinitions.get('surveys');
                        },
                        Surveys: function surveysListResolve(Restangular) {
                            return Restangular.all('surveys').getList();
                        }
                    },
                })
                .state('surveys.list', {
                    url: '/list',
                    templateUrl: 'app/survey/survey-list.html'
                })
                .state('surveys.add', {
                    url: '/add',
                    templateUrl: 'app/survey/survey-add-edit.html'
                })
                .state('surveys.info', {
                    url: '/info/:id',
                    controller: 'SingleSurveyCtrl',
                    templateUrl: 'app/survey/survey-info.html'
                })
                .state('surveys.edit', {
                    url: '/edit/:id',
                    controller: 'SingleSurveyCtrl',
                    templateUrl: 'app/survey/survey-add-edit.html'
                });
        });
})(
    window.angular
);
