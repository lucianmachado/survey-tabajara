(function(ng, _) {

    'use strict';

    ng.module('survey-votation-tabajara')
        .controller('SurveyCtrl', SurveyCtrl)
        .controller('SingleSurveyCtrl', SingleSurveyCtrl);

    function SurveyCtrl($scope, $state, Surveys, SurveyDefinition, SailsResourceService) {
        var resourceService = new SailsResourceService('surveys'.toLowerCase());
        
        $scope.surveys = Surveys;
        $scope.model_def = SurveyDefinition.originalElement;
        $scope.survey = {};

        $scope.remove = function remove(survey) {
            survey = survey || $scope.survey;
            if (window.confirm('Are you sure you want to delete this survey?')) {
                return resourceService.remove(survey, $scope.surveys);
            }
        };

        $scope.save = function save(survey) {
            survey = survey || $scope.survey;
            return resourceService.save(survey, $scope.surveys)
                .then(function() {
                    $state.go('^.list');
                }, function(err) {
                    console.error('An error occured: ' + err);
                });
        };
    }

    function SingleSurveyCtrl($scope, $stateParams, Surveys, SurveyDefinition) {
        // coerce string -> int
        $stateParams.id = _.parseInt($stateParams.id);
        if (!_.isNaN($stateParams.id)) {
            $scope.survey = _.find(Surveys, {
                id: $stateParams.id
            });
        }
    }

})(
    window.angular,
    window._
);
