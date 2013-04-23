namespace('todo.controller', {
    require : [
        'todo.model.Element',
        'todo.view.List'
    ],
    List : { extend : [ig.Controller],
        List : function() {
            
            this.Super(
                new todo.model.Element(),
                [],
                new todo.view.List(),
                []
            )
        }
    } 
});
