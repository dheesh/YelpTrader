
var myApp = angular.module('myApp',[]);


myApp.controller('Pagecontroller',['$scope','$http',
    function ($scope,$http){
    window.navigator.geolocation.getCurrentPosition(function(location){
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;
        $http.get('http://localhost:3000/getTraders',
                   {params:{lat:latitude,lon:longitude}}).
        success(function(data){
           $scope.items = data.businesses;
        });
    });
}]);
