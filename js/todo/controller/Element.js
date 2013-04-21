namespace('todo.cotroller', {
   Element : {
       
       Element : function(model, view) {
           model.on('init', function(){
              view.init(); 
           });
           
           if (todo.controller.Element.singleton) {
               return todo.controller.Element.singleton;
           }
           
           todo.controller.Element.singleton = this;
       }
   } 
});
