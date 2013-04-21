namespace('todo.view', {
    Form : { extend : [EventDispatcher],
        
        Form : function() {
            var self = this,
                input = $('#' + todo.ToDoMVC.TODO_INPUT_ID)
                    .on({
                        keydown : function(e) {
                            if (e.keyCode == 13) {
                                self.play('add', input.val());
                                input.val('');
                            }
                        }
                    });
        }
    }
})
