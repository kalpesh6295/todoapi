var env = process.env.NODE_ENV||'developement';
console.log(env);
if(env==='developement'){
    process.env.PORT=3000;
    process.env.MONGODB_URI='mongodb://localhost:27017/todoapp';
}
else if(env==='test'){
    process.env.PORT=3000;
    process.env.MONGODB_URI='mongodb://localhost:27017/testtodoapp';
}