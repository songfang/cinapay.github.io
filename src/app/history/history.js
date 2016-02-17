angular.module( 'ripplecharts.history', [
  'ui.state',
  'ui.bootstrap'
])

.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider.state( 'history', {
    url: '/history',
    views: {
      "main": {
        controller: 'HistoryCtrl',
        templateUrl: 'history/history.tpl.html'
      }
    },
    data:{ pageTitle: 'History' },
    resolve : {
          gateInit : ["gateways", function (gateways) {
            return gateways.promise;
        }]
      }
  });
}])

.controller( 'HistoryCtrl', ["$scope", "gateways", function HistoryCtrl( $scope, gateways ) {

  var history = new TotalHistory({
    url      : API,
    id       : 'totalHistory',
    resize   : true,
    gateways : gateways
  });
}]);
