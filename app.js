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
          if (foodItems != undefined) {
                var arrayOfStrings = foodItems.split(separator);
          }

          if (foodItems == null || foodItems == "" || foodItems == undefined ) {
            messageHere ="Please enter data first";
            $scope.message = messageHere;
            return;
          }

           if (arrayOfStrings.length <= 3 && arrayOfStrings.length > 0 && foodItems != "") {
            messageHere ="Enjoy";
          }

          if (arrayOfStrings.length > 3) {
            messageHere = "Too much!";
          }

                    $scope.message = messageHere;
        }
}

})();
