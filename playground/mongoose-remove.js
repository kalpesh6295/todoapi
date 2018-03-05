const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user}= require('./../server/models/user');
var id="5a9c4231d859d41e9c2a7909";
user.findByIdAndRemove(id).then((todo)=>{
    console.log(todo);
})