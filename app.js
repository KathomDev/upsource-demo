(function () {

  angular.module('app', []).controller('mathCtrl', function ($scope) {
    $scope.powerUp = function (base, exponent) {
      var result = 1;

      for (var i = 0; i < exponent; i++) {
        result *= base;
      }

      return result;
    };
  });

})();