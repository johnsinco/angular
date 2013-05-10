  angular.module('register', ['ngResource', 'rails']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:RegisterCtrl, templateUrl:'/partials/register.html'}).
      when('/#profile', {controller:RegisterCtrl, templateUrl:'/partials/profile.html'}).
      when('/#preferences', {controller:RegisterCtrl, templateUrl:'/partials/preferences.html'}).
      otherwise({redirectTo:'/'});
    });

  angular.module('register').factory('User', ['railsResourceFactory', function (railsResourceFactory) {
      return railsResourceFactory({url: '/users', name: 'user'});
  }]);

var RegisterCtrl = function($scope, $location, User) {
  $scope.user = new User();

  $scope.createAccount = function() {
    $scope.user.create();
    $scope.step = "profile"
    $location.path('/#profile');
  }
  $scope.completeProfile = function() {
    $scope.user = User.save($scope.user)
    $scope.step = "preferences"
    $location.path('/#preferences');
  }
  $scope.confirm = function() {
    $scope.user = User.save($scope.user)
    $scope.step = "thanks"
  }
}