angular.module( 'ripplecharts.multimarkets', [
  'ui.state',
  'ui.bootstrap'
])

.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider.state( 'multimarkets', {
    url: '/multimarkets',
    views: {
      "main": {
        controller: 'MultimarketsCtrl',
        templateUrl: 'multimarkets/multimarkets.tpl.html'
      }
    },
    data:{ pageTitle: 'Multi Markets' },
    resolve : {
      gateInit : ["gateways", function (gateways) {
        return gateways.promise;
      }]
    }
  });
}])

.controller( 'MultimarketsCtrl', ["$scope", "$location", "gateways", function MultimarketsCtrl( $scope, $location, gateways) {

  $scope.markets  = store.session.get('multimarkets') ||
    store.get('multimarkets') ||
    Options.multimarkets || [
    {
      base    : {currency:"XRP"},
      counter : {currency:"USD",issuer:"rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q"}},
    {
      base    : {currency:"XRP"},
      counter : {currency:"JPY",issuer:"r94s8px6kSw1uZ1MV98dhSRTvc6VMPoPcN"}},
    {
      base    : {currency:"BTC",issuer:"rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"},
      counter : {currency:"XRP"}},
    {
      base    : {currency:"XRP"},
      counter : {currency:"CNY",issuer:"rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y"}}
    ];


  var markets = new MultiMarket ({
    url            : API,
    id             : "multimarkets",
    updateInterval : 60, //5 minutes
    clickable      : true,
    gateways       : gateways,
    fixed          : false
  });


  markets.list($scope.markets);
  markets.on('updateList', function(data){
    store.set('multimarkets', data);
    store.session.set('multimarkets', data);
  });

  markets.on('chartClick', function(chart){
    var path = "/markets/"+chart.base.currency+
      (chart.base.issuer ? ":"+chart.base.issuer : "")+
      "/"+chart.counter.currency+
      (chart.counter.issuer ? ":"+chart.counter.issuer : "");
    $location.path(path);
    $scope.$apply();
  });

  $scope.$on("$destroy", function(){
    markets.list([]);
  });

//reload data when coming back online
  $scope.$watch('online', function(online) {
    if (online) {
      markets.reload();
    }
  });
}]);

