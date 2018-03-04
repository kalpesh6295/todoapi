const  expect = require('expect');
const request = require('supertest');

const {app}= require('./../server');
const {Todo}= require('./../models/todo');
var length=0;
beforeEach((done)=>{
    Todo.find().then((todos)=>{
    length = todos.length;
    });
    done();
        
})

describe('POST /Todos', ()=>{
    it('should create a new todo item',(done)=>{
        var text='test todo text';
        var completed = true;
        request(app)
        .post('/Todos')
        .send({text},{completed})
        .expect(200)
        .expect((res)=>{
           console.log(res.body)
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(err)}
         Todo.find().then((todos)=>{
             expect(todos.length).toBe(length+1);
            expect(todos[length].text).toBe(text);
             done();
             
         })
         .catch((e)=>done(e));
        })
    })

    // it('should not create a new todo item',(done)=>{
        
    //     request(app)
    //     .post('/todos')
    //     .send({})
    //     .expect(400)
        
    //     .end((err,res)=>{
    //         if(err){
    //             return done(err)}
    //             console.log(res);
    //      Todo.find().then((todos)=>{
    //          expect(todos.length).toBe(0);
    //          done();
             
    //      })
    //      .catch((e)=>done(e));
    //     })
    //})
})