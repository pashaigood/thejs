namespace('todo.controller', {
    Form : {
        Form : function(model, view) {
            view.on(
                'add',
                function(text){model.add(text)}
            );
        }
    }
})
