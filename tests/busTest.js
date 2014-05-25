var should = require('should'),
    request = require('supertest'),
    app = require('../Services/Server/busServer');

describe('GetTradersList',function(){
    it('should get a list of valid traders',function(done){
       request(app)
           .get('/getTraders')
           .query({lat:"33.0901634",lon:"-96.799559"})
           .expect('Content-Type', /json/)
           .expect(200)
           .end(function(err,res){
               if(err) throw err;
               done();
           });
    });
});