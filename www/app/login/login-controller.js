(function(ng, _) {

  'use strict';

  ng.module('survey-votation-tabajara')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($rootScope,$scope, $state,Restangular,$location,$localStorage) {
    init();

    function init(){
      $rootScope.onHome = false;
    }

    $scope.login = function(user){
      var login = Restangular.one('login');
      $rootScope.isLogged =true;

      login.customPOST(user).then(function(res){
        $localStorage.user = res.user;
        if (res.code == 200) {
          $location.path('home');
        }else{
          alert(res.message);
        }
      });
    }

    $scope.register = function(user){
      var toRegister = Restangular.one('register');
      toRegister.customPOST(user).then(function(res){
        $scope.login(user);
      },function(res){
        alert('Insert the data correctly and try again');
      });
    }
  }


})(
  window.angular,
  window._
);
