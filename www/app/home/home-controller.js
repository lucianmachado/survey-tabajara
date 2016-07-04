(function(ng, _) {

  'use strict';

  ng.module('survey-votation-tabajara')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($rootScope,$scope, Restangular, Survey, Restaurants, Votes, $state,$localStorage) {
    init();

    function init() {
      $rootScope.onHome = true;
      $scope.survey = Survey[0];
      $scope.restaurants = [];
      var today = moment();

      Restaurants.forEach(function(element) {
        if (element.lastWin) {
          var lastWin = moment(element.lastWin);

          today.diff(lastWin, 'days') > 7 && ($scope.restaurants.push(element));
        } else {
          $scope.restaurants.push(element);
        }
      });

      $scope.votesList = {};
      var votesList;
      if (Survey[0]) {
        votesList = Survey[0].votes;

        var counts = {};

        votesList.forEach(function(element) {
          counts[element.restaurantId] = (counts[element.restaurantId] || 0) + 1;
        });
        $scope.votesList = counts;
      }
    }

    $scope.vote = function(idSurvey, idRestaurant) {
      var vote = {
        idUser: $localStorage.user.id,
        restaurantId: idRestaurant,
        poll: idSurvey
      };

      var listVt = Survey[0];
      listVt.getList('votes',{idUser : $localStorage.user.id}).then(function(voto){
        if(voto.length > 0){
          alert('You have already voted');
        }else{
          Votes.post(vote).then(function(res) {
            $state.reload();
          });
        }
      });

    }

    $scope.finishSurvey = function() {
      var survey = Survey[0];
      var winnerId;
      var winnerVotes = 0;

      for (var id in $scope.votesList) {
        if ($scope.votesList[id] > winnerVotes) {
          winnerVotes = $scope.votesList[id];
          winnerId = id;
        }
      }
      if(winnerVotes !== 0 ){
        Restaurants.get(winnerId).then(function(restaurantWinner) {
          restaurantWinner.lastWin = moment().toDate();
          survey.winner = restaurantWinner.name;
          survey.isActive = false;

          survey.put().then(function(res) {
            $state.reload();
          });

          restaurantWinner.put();
        });
      }else{
        survey.isActive = false;
        survey.winner = "Não houve";
        survey.put().then(function(res) {
          $state.reload();
        });
      }

    }

    $scope.votes = function(idRestaurant) {
      return $scope.votesList[idRestaurant] || 0;
    }

    $scope.starSurvey = function() {
      var survey = {
        isActive: true
      };
      Survey.post(survey).then(function(res) {
        $state.reload();
      });
    }

  }


})(
  window.angular,
  window._
);
