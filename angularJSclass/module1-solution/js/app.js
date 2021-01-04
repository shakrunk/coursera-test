(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input = "";
  $scope.message = "";

  $scope.clickthebutton = function () {
    if ($scope.input == ""){
      $scope.message = "Please enter data first";
      $scope.font = "invalid";
      console.log("List empty");
    }else if ($scope.input.split(',').length <= 3) {
      $scope.message = "Enjoy!";
      $scope.font = "valid";
      console.log("'enjoy' || <= 3");
    }else if ($scope.input.split(',').length > 3){
      $scope.message = "Too Much!";
      $scope.font = "valid";
      console.log("'too much' || > 3");
    }else {
      $scope.message = "An unexpected error ocurred.";
      $scope.font = "invalid";
      console.log("An unexpected error ocurred.");
    }
  };
}

}());
