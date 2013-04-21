namespace('todo.model', {
   Element : { extend : [EventDispatcher],
       text : '',
       status : 0,
       
       Element : function(text, status) {
           this.text = text;
           this.status = status || 0;
           
           this.play('inti');
       }
   } 
});
