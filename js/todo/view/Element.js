namespace('todo.view', {
    require : [
        'jade.Jade',
        'todo.ToDoMVC'
    ],
    
    Element : {
        our : {
            template : $('#' + todo.ToDoMVC.ELEMENT_ID).html()
        },
        
        Element : function() {
            console.log(1);
        }
    }  
});
