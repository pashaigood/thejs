namespace('todo', {
   require : [
       'jquery.Jquery',
       'jade.Jade',
       'todo.controller.List'
   ],
   
   ToDoMVC : {
       ToDoMVC : function() {
           var list = todo.controller.List();
       }
   } 
});
