var mongoose = require('mongoose');

var Todo = mongoose.model('todo',{
    text:{type: String,
    required:true,
    minlength: 1,
trim:true},
    completed: {type:Boolean,
    default: true},
    completedAt: {
        default:null,
        type: Number}
 });


// var newTodo = new Todo({
//     text: 'cook dinner'
// });
// newTodo.save().then(
//     (doc)=>{console.log(doc)},
//     (e)=>{console.log(e)}
// );
module.exports = {Todo};