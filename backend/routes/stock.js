var express = require('express');
var router = express.Router();
var mysql = require('mysql');


   
  


router.get('/', function (req, res, next) {
  
  var stockType = req.query.type;
  console.log(stockType);

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'l1002212$$',
    database : 'stock'
  });
    
  connection.query('SELECT * FROM company WHERE market_type = ?',[stockType], function (error, results, fields) {
    
    // console.log('The solution is: ', results[0]);
    
    res.send(results);

  });
    
    connection.end();

    
});

router.get('/:id',function(req,res,next){
  
  console.log(req.params.id);
  var cp_code = req.params.id;

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'l1002212$$',
    database : 'stock'
  });
  
  connection.query('SELECT * FROM company WHERE cp_code = ?',[cp_code], function (error, results, fields) {
    
    res.send(results);

  });
    
    connection.end();
})

router.get('/:id/finance',function(req,res,next){
  
  console.log(req.params.id);
  var cp_code = req.params.id;

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'l1002212$$',
    database : 'stock'
  });
  
  connection.query('SELECT * FROM finance WHERE cp_code = ?',[cp_code], function (error, results, fields) {
    
    res.send(results);

  });
    
    connection.end();
})

module.exports = router;