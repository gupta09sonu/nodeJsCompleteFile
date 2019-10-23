const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// MongoDB Connect
const getDB = require('../database/dbOpeations').getDB;


// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

/* GET Raise Complaints page. */
router.get('/raise', function(req, res, next) {
    res.render('raise-complaints.ejs');
});

/* GET List Of Complaints page. */
router.get('/list', function(req, res, next) {
    // get data from database
    const db = getDB();
    db.collection('Complaints').find({}).toArray((err,complaints) => {
        if(err){
            return console.log(err);
        }
        res.render('list-of-complaints.ejs',{complaints : complaints});
    });
});

/* POST Raise Complaints Form. */
router.post('/complain', urlencodedParser ,function(req, res, next) {
    let complaint = req.body;
    // Store Data to Database
    const db = getDB();  //database object dbo-->db=the db-->(err,db)=>let dbo=db.db('angulardb');db.collection
    db.collection('Complaints').insertOne(complaint,(err , data) => {
        if(err) throw err;
    });
    res.render('raise-complaints-success.ejs',{complaint: complaint});
});



module.exports = router;
