const  expect = require('expect');
const request = require('supertest');

const {app}= require('./../server');
const {Todo}= require('./../models/todo');
var length;
beforeEach((done=>{
    Todo.find().then((todos)=>{
        length=todos.length;
        done();
    })
}))


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

    // describe('get /todos/:id',()=>{
    //     it('should return todo doc',(done)=>{
    //        // var HexId =todo[0]._id.toHexString();
    //        Todo.find().then((todos)=>{
    //        var HexId=todos[0]._id.toHexString();
    //         request(app)
    //         .get(`/todos/${HexId}`)
    //         .expect(200)
    //         .expect((res)=>{
                
    //            expect(res.body.text).toBe(todos[0].text);
    //         })
    //         .end(done);
    //     });
    // });
    // });

    // describe('delete /todos/:id',()=>{
    //     it('should delete todo doc',(done)=>{
    //        // var HexId =todo[0]._id.toHexString();
    //        Todo.find().then((todos)=>{
    //        var HexId=todos[0]._id.toHexString();
    //        var length = todos.length;
    //         request(app)
    //         .delete(`/todos/${HexId}`)
    //         .expect(200)
    //         .expect((res)=>{
    //            expect(res.body._id).toBe(HexId);
               
    //         })
    //         .end((err,res)=>{
    //             if(err){ return done(err)}
    //             Todo.findById(HexId).then((todo)=>{
    //                 console.log(todo);
    //                 expect(todo).toNotExist();
    //                 done();
    //             })
    //         });
    //     });
    // });
    // });


    // describe('patch /todos/:id',()=>{
    //     it('should update todo doc',(done)=>{
    //        // var HexId =todo[0]._id.toHexString();
    //        Todo.find().then((todos)=>{
    //        var HexId=todos[0]._id.toHexString();
    //        var text = todos[0].text;
    //         request(app)
    //         .patch(`/todos/${HexId}`)
    //         .send({
    //             text:"final testing for node todo api  completed",
    //             completed:true

    //         })
    //         .expect(200)
    //         .expect((res)=>{
    //            expect(res.body._id).toBe(HexId);
    //            expect(res.body.text).toNotBe(text);
    //            expect(res.body.completed).toBe(true);
    //            expect(res.body.completedAt).toBeA('number');
               
    //         })
    //         .end(done)
                
    //         });
    //     });
    // });
    });