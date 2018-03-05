require('./config/config');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {user} = require('./models/user');
var {Todo} = require('./models/todo');


const port = process.env.PORT||3000;

var app = express();
app.use(bodyParser.json());

// post to do data

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

// post user data 

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



// get user 

app.get('/users',(req,res)=>{
    user.find().then((users)=>{
        res.send({users});
    },(e)=>{
        res.status(400).send(e);
    });
});

// get todo 

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});



// get todo by id 


app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
       return res.status(404).send('id not valid')
    }
   Todo.findById(id).then((todo)=>{
       res.send({todo});
   }).catch((e)=>{
       res.status(400).send(e);
   })
});

//deleteing  data 
app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('id not valid');
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){ return res.status(404).send('id not found')}
        res.send(todo);
    }).catch((e)=> res.status(400).send(e) )
})

//updating data

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);
    if(_.isBoolean(body.completed)&& body.completed){
        body.completedAt= new Date().getTime();
    }
    else{
        body.completed=false;
        body.completedAt=null;
    }
    if(!ObjectID.isValid(id)){
        return res.status(404).send('id not valid');
    }
    Todo.findByIdAndUpdate(id,{$set:body} ,{new:true}).then((todo)=>{
        if(!todo){return res.status(404).send('id not found')}
        res.send(todo);
    })
    .catch((e)=>{
        res.status(400).send(e);
    })
});



//start listening 
app.listen(port, ()=>{
    console.log('start listening on port '+port)
})

module.exports= {app};