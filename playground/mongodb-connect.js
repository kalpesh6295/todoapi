const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
    if(err){
        return console.log('not able to connect to server');
    }
    console.log('success');
    // db.collection('users').insertOne({
    //     name: 'john',
    //     age:23,
    //     location:'newyork'
    // },(err,result)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(result.ops[0]._id.getTimestamp());
    //     }
    // })

    // db.collection('Todos').find({completed: true}).toArray().then(
    //     (docs)=>{ console.log(JSON.stringify(docs,undefined,2))},
    //     (err)=>{console.log(err)});
    
    db.collection('Todos').find().count().then(
        (count)=>{ console.log(count)},
        (err)=>{console.log(err)});
    
    db.close();
});