require("dotenv").config();
const express = require("express");
const bodyparse = require('body-parser');
const knex = require("./db/knex");
const app = new express();
const cors = require('cors');
const port = 8888;
app.use(bodyparse.urlencoded({extended:true}));
app.use(bodyparse.json());
app.use(cors());



app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    res.json({error: true, message: 'Please check you syntax'});
  } else {
    next();
  }
});

const router = express.Router();

router.route('/interests') // get list
  .get(function(req, res){
    knex.select().table('interests')
    .then(collection=>{
    res.json({
      error: false,
      data: collection
    })
  }).catch(err=>{
    res.status(500).json({
      error: true,
      data: {
        message: err.message
      }
    })
  })
})
.post(function(req, res){ // create
  knex('interests').insert({
    image_loc: req.body.image_loc, 
    description: req.body.description
  })
  .then(id=>{
    res.status(201).json({ error: false, id})
  })
  .catch(err=>{
    res.json({error: true, data:{ message: err.message}})
  })
})

router.route('/interest/:id')
  .get(function(req, res){
    //
    knex.select().table('interests').where({id: req.params.id}).then(row=>{
      res.json({error: false, data: row[0]});
    })
});
router.route('/interest/:id/factoids')
.get(function(req, res){
  knex.select().table('factoids').where({interest_id: req.params.id})
  .then(collection => {
    res.json(collection);
  })
});

router.route('/interest/:int_id/factoid/:f_id')
  .get(function(req, res){
    knex.select().table('factoids').where({interest_id: req.params.int_id, id: req.params.f_id})
    .then(row => {
      res.json(row[0]);
    })
  });

router.route('/interest/:int_id/factoid/:f_id')
  .put(function(req, res){
    let interest_id = req.body.interest_id;
    let fact = req.body.fact;
    
    let payload = {};
    if(interest_id){
      payload.interest_id = interest_id;
    }
    if(fact){
      payload.fact = fact;
    }
    if(Object.entries(payload).length !== 0){
      knex('factoids').where({id: req.params.f_id})
      .update(payload).then(result=>{
        res.json({updated: req.params.f_id});
      })
      .catch(err => {
        res.json({error: true, message: err.message})
      });
    }
    else{
      res.json({error: true, message: "Undefined body, must contain `fact`"}).status(406)
    }
  })
  
router.route('/interest/:int_id/factoid')
.post(function(req, res){
  knex('factoids').insert({interest_id: req.params.int_id, fact: req.body.fact})
  .then(id=>{
    res.status(201).json({error: false, id});
  })
  .catch(err=>{
    res.json({error: true, message: err.message})
  })
});

app.use('/', router);
app.listen(port, function(){
  console.log("Listening on "+port);
});
