var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {user} = require('./models/user');
var {Todo} = require('./models/todo');




var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
   var todo = new Todo({
       text: req.body.text
   });
   todo.save().then((doc)=>{
       res.send(doc)},
   (err)=>{
       res.send(err)
   });
});
app.listen(3000, ()=>{
    console.log('start listening on port 3000')
})

module.exports= {app};