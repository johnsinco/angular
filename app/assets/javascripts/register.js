var register = angular.module('register', ['ngResource']);

var RegisterCtrl = function($scope, $resource, $route, $routeParams) {
  User = $resource("/users/:id", {id: "@id"});
  $scope.step = "create" 
  $scope.user = new User();

  $scope.createAccount = function() {
    $scope.user = User.save($scope.user)
    $scope.step = "profile"
  }
  $scope.completeProfile = function() {
    $scope.user = User.save($scope.user)
    $scope.step = "preferences"
  }
  $scope.confirm = function() {
    $scope.user = User.save($scope.user)
    $scope.step = "thanks"
  }
}