angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.preguntas = {};
  $scope.preguntas.uno = " Cual fue el primer campeon invicto del futbol argentino?";
  $scope.Ver = false;

  $scope.Respuesta=function(rta){
    console.log(rta);
    $("#ciclon").removeClass("button-positive");
    $("#ciclon").addClass("resp-correcta");
    if(rta == 'b'){
      $("#river").removeClass("button-positive");
      $("#river").addClass("resp-incorrecta");
    } else if(rta == 'c'){
      $("#boca").removeClass("button-positive");
      $("#boca").addClass("resp-incorrecta");
    } else if(rta == 'd'){
      $("#racing").removeClass("button-positive");
      $("#racing").addClass("resp-incorrecta");
    }
  }

  $scope.Empezar=function(){
    $scope.Ver = true;
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
