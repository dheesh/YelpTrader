/**
 * Created by ndheesh on 5/17/14.
 */
var http= require('http'),
    express = require('express'),
    path = require('path');
var getBusiness = require('../DAL/GetBusiness');

var app = express();
module.exports = app;

http.createServer(app).listen(3000, function () {
    console.log("BusServer listening on port" +3000)
});

app.get('/getTraders',getBusiness.handleRequest);