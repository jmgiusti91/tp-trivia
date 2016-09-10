angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout) {
  $scope.usuario = {};
  $scope.preguntas = " Cual fue el primer campeon invicto del futbol argentino?";
  $scope.Ver = false;
  $scope.respuestas = {};
  $scope.respuestas.uno = "A - San Lorenzo";
  $scope.respuestas.dos = "B - River";
  $scope.respuestas.tres = "C - Boca";
  $scope.respuestas.cuatro = "D - Racing";
  $scope.instancia = 1;
  $scope.eligio = false;

  $scope.Respuesta=function(rta){
      console.log(rta);
      $scope.eligio = true;
      if($scope.instancia == 1){
      $("#uno").removeClass("button-positive");
      $("#uno").addClass("resp-correcta");
      if(rta == 'b'){
        $("#dos").removeClass("button-positive");
        $("#dos").addClass("resp-incorrecta");
      } else if(rta == 'c'){
        $("#tres").removeClass("button-positive");
        $("#tres").addClass("resp-incorrecta");
      } else if(rta == 'd'){
        $("#cuatro").removeClass("button-positive");
        $("#cuatro").addClass("resp-incorrecta");
      }
    }
      

    $timeout(function(){
      $scope.eligio = false;
      if($scope.instancia == 1){
      $("#uno").removeClass("resp-correcta");
      $("#uno").addClass("button-positive");
      $("#dos").removeClass("resp-incorrecta");
      $("#dos").addClass("button-positive");
      $("#tres").removeClass("resp-incorrecta");
      $("#tres").addClass("button-positive");
      $("#cuatro").removeClass("resp-incorrecta");
      $("#cuatro").addClass("button-positive");

      $scope.preguntas = " Quien descubrio America?";
      $scope.respuestas.uno = "A - San Martin";
      $scope.respuestas.dos = "B - Monguito";
      $scope.respuestas.tres = "C - Colon";
      $scope.respuestas.cuatro = "D - Susana Gimenez";
      $scope.instancia = 2;
      }
    }, 3000)
    
    /*$scope.preguntas = " Quien descubrio America?";
      $scope.respuestas.uno = "A - San Martin";
      $scope.respuestas.dos = "B - Monguito";
      $scope.respuestas.tres = "C - Colon";
      $scope.respuestas.cuatro = "D - Susana Gimenez";*/
    
  }

  $scope.Empezar=function(){
    $scope.Ver = true;
    $("#ion-cont").removeClass("fondo-inicio");
    $("#ion-cont").addClass("fondo-preg");
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
