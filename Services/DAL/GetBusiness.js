/**
 * Created by ndheesh on 5/17/14.
 */
var http = require('http');
var yelp = require('yelp');
var config = require('../conf/busConfig');


var yelpRes = yelp.createClient(config.credentials);

exports.handleRequest = function(req,res){
    console.log("REQ :Get Traders");
    var lat = req.query.lat || null;
    var lon = req.query.lon || null;
    var term = req.query.term || null;
    searchTraders(term,lat,lon,function(error,data){
        console.log(error);
        var result = JSON.stringify(data);
        res.set("Content-Type","application/json");
        res.set("Access-Control-Allow-Origin","*");
        res.write(result);
        res.end();
    });
};


function searchTraders(term,latitude,longitude,callbackFn) {
    yelpRes.search({sort:1,ll:latitude+','+longitude,term:term}, function (error, data) {
        return callbackFn(error,data);
    });

}
