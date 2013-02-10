var global = window || global;

global.namespace = function (ns, module) {
	
	var path = ns.split('.'),
		l = path.length,
		i = 0,
		parent = this;
	
	for (i; i<l - 1; i++) {
		parent[path[i]] = parent[path[i]] || {};
		parent = parent[path[i]];
	}
	
	var className,
		cClass;
	
	if (module['require'] != undefined) {
		
		module['require'].push(function() {
			for (className in module) {
				
				cClass = class_constructor(className, module);
				parent[path[l-1]] = parent[path[l-1]] || {};
				parent[path[l-1]][className] = cClass;
			}
		});
		
		include.apply(global, module['require']);
		delete module['require'];
	} else {
		for (className in module) {
			cClass = class_constructor(className, module);
			parent[path[l-1]] = parent[path[l-1]] || {};
			parent[path[l-1]][className] = cClass;
		}
	}
};


function class_constructor(className, module) {
	
	var memoryProperty = {},
		ctx = {
			static : {}
		},
		tmp,
		prop;
	
		ctx.public = ctx;
		
		for (prop in ctx) {
			if (global[prop]) {
				memoryProperty[prop] = global[prop];
			}
			global[prop] = ctx[prop];
		}
		
		context({'self':ctx}, module[className], ctx);
		tmp = ctx[className];
		
		for (prop in ctx.static) {
			tmp[prop] = ctx.static[prop];
		}
		
		// Если оставить то будит информация о статичных свойствах
		// и методах
		delete(global['static']);
		
		for (prop in ctx) {
			tmp.prototype[prop] = ctx[prop];
//			delete(global[prop]);
			delete(ctx[prop]);
		}
		
		for (prop in memoryProperty) {
			global[prop] = memoryProperty[prop];
			delete(memoryProperty[prop]);
		}
		
		return tmp;
}

function context(ctx, function_to_run, ctx2){
	var prop,
		args = [],
		params = [],
		temp_func,
		func_body = function_to_run
					.toString()
					.replace(/^.*?\{/, '')
					.replace(/}$/, '');
	
	
	for (prop in ctx) {
		args.push(prop);
		params.push(ctx[prop]);
	}
	
	temp_func = new Function(args, func_body);
	try {
		temp_func.apply(ctx2, params);
	} catch (e) {
		console.log(e.stack);
	}
}

global.extend = function (from, to) {
	from = from || {};
	to = to || {};
	var i;
	if( typeof(to) == 'object' ){
		for(i in to){
			if(to.hasOwnProperty(i))
				from[i] = to[i];
		}
	} else if( typeof(to) == 'function' ){
		to.call(from);
	}
};

global.include = function() {
	var args = arguments,
		cnt = args.length - 1,
		path;
	
	if(typeof(args[cnt]) == 'function') {
		include.data.funcs.push(args[cnt]);	
	}
	
	for(var i=0; i < cnt; i++) {
		path = arguments[i];
		if (include.data.cache[path]) {
			continue;
		}
		include.data.start += 1;
		include.data.cache[path] = 1;
		
		create_script(
			URL + path.replace(/\./ig, '/') + '.js',
			include.data.callback,
			include.data.callback
		);
	}
};
include.data = {start : 0, ready : 0, funcs : [], cache : {}};
include.data.callback = function() {
	include.data.ready += 1;
	if(include.data.ready == include.data.start) {
		var length = include.data.funcs.length,
			func;
		while((length -= 1) > -1){
			func = include.data.funcs.pop();
			func();
		}
	}
}

function create_script(path, callback, on_error) {
	var head_element = document.getElementsByTagName("head")[0],
		scr = document.createElement('script'),
		width_error = width_error || true;
	scr.type = "text/javascript";
	scr.src = path;
	scr.done = false;
	
	scr.onload = scr.onreadystatechange = function() {
	  if ( !scr.done && (!this.readyState ||
	            this.readyState === "loaded" || this.readyState === "complete") ) {
		  	scr.done = true;
//	        jQuery.handleSuccess( s, xhr, status, data );
//	        jQuery.handleComplete( s, xhr, status, data );
	        callback();
	        // Handle memory leak in IE
	        scr.onload = scr.onreadystatechange = null;
	    }
	}
	scr.onerror = on_error;
	head_element.appendChild(scr);
};

/*window.onerror=function(msg, url, linenumber){
//	 alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber)
	console.log('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
	 return true
	}*/
(function() {
	var scripts = document.getElementsByTagName('script'),
		path = scripts[scripts.length-1].src.split('?')[0];
		global.URL = path.split('/').slice(0, -1).join('/')+'/';
		
	function start_point(e)
	{
		if(start_point.onse) {
			return;
		}

		start_point.onse = true;
		var head_element = document.getElementsByTagName("head")[0],
			scr = document.createElement('script');
		scr.type="text/javascript";
		scr.src=URL+"index.js";
		/*scr.onload = function() {
			global.index();
		};*/
		
		head_element.appendChild(scr);
	}
	start_point.onse = false
//Mozilla, Opera and webkit nightlies currently support this event
	if ( document.addEventListener ) {
		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", start_point, false);
		
		// A fallback to window.onload, that will always work
//		window.addEventListener("load", start_point, false);
		
// If IE event model is used
	} else if ( document.attachEvent ) {
		// ensure firing before onload,
		// maybe late but safe also for iframes
		document.attachEvent("onreadystatechange", start_point);
		
		// A fallback to window.onload, that will always work
//		window.attachEvent("onload", start_point);
	}
})();