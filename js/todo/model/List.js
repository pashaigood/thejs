namespace('todo.model', {
    require : [
        'todo.model.Element',
        'todo.view.Element',
        'todo.controller.Element',
        'jquery.LocalStorage'
    ],
    
    List : {
        view : {},
        data : {},
        
        List : function() {
            this.data =  this.get();
            console.log(this.data)
            // this.createList();
        },
        
        createElement : function(data) {
            new todo.controller.Element(
                new todo.model.Element(data.text, data.status),
                new todo.view.Element()
            );
        },
        
        createList : function() {
            var data = this.data;
                
            for (var i, l = data.length; i < l; i ++) {
                createElement(data[i]);
            }
        },
        
        add : function(text) {
            var element = new todo.model.Element(text);
            this.data.push(element);
            this.set();
        },
        
        set : function() {
            $.localStorage(todo.ToDoMVC.TODO_DATA, this.data);
        },
        
        get : function() {
            return $.localStorage(todo.ToDoMVC.TODO_DATA) || [];
        }
    },
})
