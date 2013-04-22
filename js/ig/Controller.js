/**
 * @author PBelugin
 * @namespace ig
 */
namespace('ig', {

    Controller : {
        /** Модель */
        model : {},
        /** Вид */
        view : {},
        
        /**
         * Данный класс реализует связь между видом и моделью
         * по средствам событий
         * @constructor
         * @this {Controller}
         * @param {Object} model
         * @param {Array} model_event список событий модели, на которые будит подписан вид
         * @param {Object} view
         * @param {Array} view_event список событий вида, на которые будит подписана модель
         */
        Controller : function(model, model_event, view, view_event) {
            var self = this,
                l,
                event_name,
                function_name;
            
            if (model_event) {
                l = model_event.length;
                while ((l -= 1) > -1) {
                    event_name = model_event[l];
                    function_name = self.capitalise(event_name);
                    if (! function_name) {
                        continue;
                    }
                    
                    function_name = 'on' + function_name;
                    
                    if (typeof(view[function_name]) == 'function') {
                        (function(event_name, function_name) {
                            model.on(event_name, function() {
                                self._call((function_name, args);
                                view[function_name].apply(view, arguments);
                            });
                        })(event_name, function_name);
                    }
                }
            }
            
            if (view_event) {
                
                l = view_event.length;
                while ((l -= 1) > -1) {
                    event_name = view_event[l];
                    function_name = self.capitalise(event_name);
                    if (! function_name) {
                        continue;
                    }
                    
                    function_name = 'on' + function_name;
                    
                    if (typeof(model[function_name]) == 'function') {
                        (function(event_name, function_name) {
                            view.on(event_name, function() {
                                self._call((function_name, args);
                                model[function_name].apply(model, arguments);
                            });
                        })(event_name, function_name);
                    }
                }
            }
            
            self.model = model;
            self.view = view;
        },
        
        _call : function(function_name, args) {
            if (typeof(this[function_name]) == 'function') {
                this[function_name].apply(this, args);
            }
        },
        
        capitalise : function(string) {
            if (typeof(string) != 'string') {
                throw new TypeError('parameter must be a string');
                return false;
            }
            
            var part = string.split('.');
            string = part.pop();
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
})
