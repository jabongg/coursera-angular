(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      //  $scope.lunchItems = "";


        $scope.splitLunchItems = function () {

        var separator = ",";
        var messageHere = "";
          var foodItems = $scope.lunchItems;
          var arrayOfStrings = foodItems.split(separator);

          if (foodItems == null || foodItems == "" ) {
            messageHere ="Please enter data first";
          }

           if (arrayOfStrings.length <= 3 && arrayOfStrings.length > 0 && foodItems != "") {
            messageHere ="Enjoy";
          }

          if (arrayOfStrings.length > 5) {
            messageHere = "Too much!";
          }

                    $scope.message = messageHere;
        }
}

})();
