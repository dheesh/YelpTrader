
var myApp = angular.module('myApp',['angular-loading-bar']);


myApp.controller('Pagecontroller',['$scope','$http',
    function ($scope,$http,angularLoadingBar){
        var url = 'http://localhost:3000/getTraders';
        window.navigator.geolocation.getCurrentPosition(geoLocationSuccess,geoLocationErr);

        function geoLocationSuccess(pos){
            var latitude = pos.coords.latitude.toFixed(4);
            var longitude = pos.coords.longitude.toFixed(4);

            $http.get(url,{params:{lat:latitude,lon:longitude}})
                 .success(function(data)
                    {
                        $scope.items = data.businesses;
                        localStorage.setItem("cachedTraderList",JSON.stringify($scope.items));
                    });
        };

        function geoLocationErr(err){
            $scope.items = JSON.parse(localStorage.getItem("cachedTraderList"));
            $scope.$apply();
        };
}]);

myApp.filter('toMiles',function(){
   return function(input){
       return (input * 0.000621371192).toFixed(2) +' miles away';
   };
});
