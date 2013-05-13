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

  $scope.init = function() {
    $scope.user = new User();
    $scope.step = "register";
  }

  $scope.createAccount = function() {
    $scope.user.create().then(function(result) {
      $scope.save_result = result;  
    });
    $scope.step = "profile";
    $location.path('/#profile');
  }
  $scope.completeProfile = function() {
    console.log("$scope._id = "+$scope.user._id);
    console.log("before query for id = "+$scope.user._id);
    User.get($scope.user._id).then(function(user) {
      console.log("in query callback...");
      console.log("user = "+user+ "_id = "+user._id + "id = "+user.id);
      user.id = user._id
      user.phone = $scope.user.phone;
      user.street = $scope.user.street;
      user.update();
    });

    $scope.step = "preferences"
    $location.path('/#preferences');
  }
  $scope.confirm = function() {
    $scope.user = User.save($scope.user)
    $scope.step = "thanks"
  }
}