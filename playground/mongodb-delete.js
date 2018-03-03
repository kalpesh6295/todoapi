const {ObjectID,MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
    if(err){
        return console.log('not able to connect to server');
    }
    console.log('success');
    db.collection('users').findOneAndDelete({_id: new ObjectID("5a9a720727274203b70d34fd")}).then(
        (result)=>{console.log(result)},
        (err)=>{console.log(err)}
    );
    db.close();
});