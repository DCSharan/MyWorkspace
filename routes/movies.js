var express = require('express');
var router = express.Router();/*creates a router object of express module*/
var mongoClient=require('mongodb').MongoClient;
var db;

mongoClient.connect("mongodb://127.0.0.1:27017",function(err,connection){
    db=connection.db("projector");
})

router.get('/all',function(req,res,next){
    var movieCollection=db.collection("movies")
    movieCollection.find().toArray(function(err,data){
        res.json(data);
    });
});
router.post('/addMovie',function(req,res,next)
{console.log(req.body);
    var movie=req.body;
var moviesCollection=db.collection("movies");
moviesCollection.insert(movie, function(err,data){
     if(!err){
          return res.json({
              isSuccess:true});
          }
          else{
              return res.json({
                  isSuccess:false
              });
          }
          })
     
    
});
/* GET users listing. */

module.exports = router;
