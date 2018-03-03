const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
    if(err){
        return console.log('not able to connect to server');
    }
    console.log('success');
    db.collection('users').insertOne({
        name: 'michell',
        age:21,
        location:'kohima'
    },(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result.ops[0]._id);
        }
    })

    // db.collection('Todos').find({completed: true}).toArray().then(
    //     (docs)=>{ console.log(JSON.stringify(docs,undefined,2))},
    //     (err)=>{console.log(err)});
    
  
    db.close();
});