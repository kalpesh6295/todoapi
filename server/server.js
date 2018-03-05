const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {user} = require('./models/user');
var {Todo} = require('./models/todo');


const port = process.env.PORT||3000;

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
   var todo = new Todo({
       text: req.body.text
   });
   todo.save().then((doc)=>{
       res.send(doc)},
   (err)=>{
       res.status(400).send(err)
   });
});

app.post('/users',(req,res)=>{
    var newUser = new user({
        name: req.body.name,
        age: req.body.age
    });
    newUser.save().then((doc)=>{
        res.send(doc)},
    (err)=>{
        res.status(400).send(err)
    });
 });

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
       return res.status(404).send('id not valid')
    }
   Todo.findById(id).then((todo)=>{
       res.send(todo);
   }).catch((e)=>{
       res.status(400).send(e);
   })
});
app.listen(port, ()=>{
    console.log('start listening on port '+port)
})

module.exports= {app};