(function(ng, _) {

    'use strict';

    ng.module('survey-votation-tabajara')
        .directive('navbar', navbar);

    function navbar() {
      return {
        templateUrl: 'app/navbar/navbar.html',
        restrict: 'E',
        controller: function ($scope,Restangular,$location,$state,$localStorage) {
          init();

          function init(){

          }

          $scope.showNav = function(){
            if($location.path() == '/login'){
              return true;
            }else{
              return false;
            }
          }

          $scope.logout = function(){
            $localStorage.$reset();
            Restangular.oneUrl('logout').get();
            $location.path('login');
          }
        }
      };
    }
})(
    window.angular,
    window._
);
