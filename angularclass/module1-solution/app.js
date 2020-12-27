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
      console.log("List empty");
      $scope.message = "Please enter data first";
    }else if ($scope.input.split(',').length <= 3) {
      console.log("'enjoy' || <= 3");
      $scope.message = "Enjoy!";
    }else if ($scope.input.split(',').length > 3){
      console.log("'too much' || > 3");
      $scope.message = "Too Much!";
    }else {
      console.log("An unexpected error ocurred.");
      $scope.message = "An unexpected error ocurred.";
    }
  };
}

}());
