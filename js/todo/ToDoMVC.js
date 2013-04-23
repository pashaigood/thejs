namespace('todo', {
   require : [
       'ig.Controller',
       'jquery.Jquery',
       'jade.Jade',
       'todo.controller.List'
   ],
   
   ToDoMVC : {
       ToDoMVC : function() {
           
           var test = new todo.Test();
           test.on('test', function() {
               return false;
           });
           
           test.on('test', function() {
               return true;
           });
           
           test.test();
           // var list = new todo.controller.List();
       }
   },
   
   Test : { extend : [EventDispatcher],
       Test : function() {
           
       },
       
       test : function() {
           console.log(this.play('test'))
       }
   }
});

