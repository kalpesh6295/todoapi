const {ObjectID,MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
    if(err){
        return console.log('not able to connect to server');
    }
    console.log('success');
    db.collection('users').findOneAndUpdate(
        {age:25},
        {$set:{location:"texas"}},
        {returnOriginal:false}).then(
        (result)=>{console.log(result)},
        (err)=>{console.log(err)}
    );
    db.close();
});