require("dotenv").config();
const express = require("express");
const bodyparse = require('body-parser');
const knex = require("./db/knex");
const app = new express();

app.use(bodyparse.urlencoded({extended:true}));
app.use(bodyparse.json());

const router = express.Router();

router.route('/interests')
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
.post(function(req, res){
  knex('interests').insert({image_loc: req.body.image_loc, description: req.body.description})
  .then(id=>{
    res.status(201).json({ error: false, id})
  })
  .catch(err=>{
    res.json({error: true, data:{ message: err.message}})
  })
});


app.use('/', router);
app.listen(3000, function(){
  console.log("Listening on 3000");
});
