namespace('todo.model', {
    require : [
        'jquery.LocalStorage'
    ],
    
    Element : { extend : [EventDispatcher],
       our : {
           STORAGE_NAME : 'todo.elements',
           
           get : function(id) {
               var data = $.localStorage(todo.model.Element.STORAGE_NAME),
                   returned = [];
                   
               if (id && data.length) {
                   for (var i = 0, l = data.length; i < l; i++) {
                       if (data[i].id == id) {
                           data[i].order = i;
                           returned.push(data[i]);
                       }
                   }
                   
                   data = returned;
               }
               
               return data.length ? data : false;
           },
           
           set : function(id, data) {
               var data = $.localStorage(todo.model.Element.STORAGE_NAME),
                   element = todo.model.Element.get(id);
               if (element) {
                   the.extend(element, data[element.order]);
               }
               
           },
           
           add : function(data) {
               
           }
       },
       
       text : '',
       status : 0,
       order : 0,
       
       Element : function(text, status) {
           
           this.text = text;
           this.status = status || 0;
           
           this.play('init');
       }
    } 
});
