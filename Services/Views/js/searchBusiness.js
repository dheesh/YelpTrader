
var myApp = angular.module('myApp',[]);


myApp.controller('Pagecontroller',['$scope','$http',
    function ($scope,$http){
        window.navigator.geolocation.getCurrentPosition(function(location){
        var url = 'http://localhost:3000/getTraders';
        var latitude = location.coords.latitude.toFixed(4);
        var longitude = location.coords.longitude.toFixed(4);
        $http.get(url,
            {params:{lat:latitude,lon:longitude}})
            .success(function(data)
            {
                $scope.items = data.businesses;
            });
    });
}]);

myApp.filter('toMiles',function(){
   return function(input){
       return (input * 0.000621371192).toFixed(2) +' miles away';
   };
});
