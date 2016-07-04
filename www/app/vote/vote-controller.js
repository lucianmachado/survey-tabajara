(function(ng, _) {

    'use strict';

    ng.module('survey-votation-tabajara')
        .controller('VoteCtrl', VoteCtrl)
        .controller('SingleVoteCtrl', SingleVoteCtrl);

    function VoteCtrl($scope, $state, Votes, VoteDefinition, SailsResourceService) {
        var resourceService = new SailsResourceService('votes'.toLowerCase());
        
        $scope.votes = Votes;
        $scope.model_def = VoteDefinition.originalElement;
        $scope.vote = {};

        $scope.remove = function remove(vote) {
            vote = vote || $scope.vote;
            if (window.confirm('Are you sure you want to delete this vote?')) {
                return resourceService.remove(vote, $scope.votes);
            }
        };

        $scope.save = function save(vote) {
            vote = vote || $scope.vote;
            return resourceService.save(vote, $scope.votes)
                .then(function() {
                    $state.go('^.list');
                }, function(err) {
                    console.error('An error occured: ' + err);
                });
        };
    }

    function SingleVoteCtrl($scope, $stateParams, Votes, VoteDefinition) {
        // coerce string -> int
        $stateParams.id = _.parseInt($stateParams.id);
        if (!_.isNaN($stateParams.id)) {
            $scope.vote = _.find(Votes, {
                id: $stateParams.id
            });
        }
    }

})(
    window.angular,
    window._
);
