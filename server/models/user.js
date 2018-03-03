var mongoose = require('mongoose');

var user =  mongoose.model('user',
{ name:{
    type: String,
    required: true,
    trim: true
},
age:{
    type: Number,
    required:true
},
location:{type: String,
        default: "newyork"
}

 });
// var newUser = new user({
// name: "rohan",
// age:22
// });
// newUser.save().then(
// (result)=>{console.log(result)},
// (err)=>{console.log(err)}
// );

 module.exports = {user};