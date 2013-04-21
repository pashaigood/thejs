namespace('todo', {
   require : [
       'jquery.Jquery',
       'jade.Jade',
       'todo.model.List'
   ],
       // 'todo.controller.Form',
       // 'todo.view.Form'
   ToDoMVC : {
       our : {
           LIST_ID : 'todo-list',
           TODO_INPUT_ID : 'new-todo',
           ELEMENT_ID : 'todo-element',
           
           TODO_DATA : 'thejs.todo'
       },
       
       list : {},
       form : {},
       
       ToDoMVC : function() {
           // console.log('todo')
           this.list = new todo.model.List();
           // this.form = new todo.controller.Form(
               // this.list,
               // new todo.view.Form()
           // );
       }
   } 
});
