var global=window||global;global.class_factory=function(a,b){var d=a[b][b],e=a[b],c=e.extend,f=e.our,g;if(f)for(g in f)d[g]=f[g];delete e.our;delete e.extend;delete e[b];d.prototype=e;d.prototype.constructor=d;if(c)for(e=c.length;e--;)extend(d,c[e]);a[b]=d};global.namespace=function(a,b){var d=a.replace(/\//g,".").split("."),e=d.length,c=0,f=global;for(c;c<e-1;c++)f[d[c]]=f[d[c]]||{},f=f[d[c]];"function"==typeof b?(c=b.toString().replace(/\s/g,"").match(/require\s*:\s*\[(.*?)\]/)[1].split(","),c.push(function(){b=b();delete b.require;namespace.create_module(b,f,d,e)}),include.apply(global,c)):void 0!==b.require?(b.require.push(function(){delete b.require;namespace.create_module(b,f,d,e)}),include.apply(global,b.require)):namespace.create_module(b,f,
d,e)};namespace.create_module=function(a,b,d,e){for(var c in a)a.hasOwnProperty(c)&&(class_factory(a,c),b[d[e-1]]=b[d[e-1]]||{},b[d[e-1]][c]=a[c])};global.extend=function(a,b){var d=a.prototype,e,c=function(){};c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(e in d)a.prototype[e]=d[e];"function"==typeof b&&(a.prototype._supers=a.prototype._supers||[],a.prototype._supers.push(b));a.prototype.Super=extend.Super};extend.Super=function(){for(var a=this._supers.length;-1<--a;)this._supers[a].apply(this,arguments)};global.include=function(){var a=arguments,b=a.length-1;"function"==typeof a[b]&&include.data.funcs.push(a[b]);for(var d=0;d<b;d++)a=arguments[d],include.data.cache[a]||(include.data.start+=1,include.data.cache[a]=1,create_script(URL+a.replace(/\./ig,"/")+".js",include.data.callback,include.data.callback))};include.data={start:0,ready:0,funcs:[],cache:{}};
include.data.callback=function(){include.data.ready+=1;if(include.data.ready==include.data.start)for(var a=include.data.funcs.length,b;-1<(a-=1);)b=include.data.funcs.pop(),b()};var child_number=1;Object.prototype.children={length:0};Object.prototype._id={};Object.prototype.addChild=function(a){a._id||(a._id=child_number++);this.children[a._id]=a._id;this.children.length+=1;a.parent=this};Object.prototype.removeChild=function(a){this.children[a._id]&&(this.children[a._id].parent=void 0,this.children[a._id]=void 0,this.children.length-=1)};Object.prototype.on=function(a,b){this._listener=this._listener||{};this._listener[a]=this._listener[a]||[];this._listener[a].push(b)};Object.prototype.play=function(a){var b=Array.prototype.slice.call(arguments);b.shift();if(void 0!=this._listener&&void 0!=this._listener[a])for(var d=this._listener[a].length;0<=(d-=1);)this._listener[a][d].apply(this,b)};function create_script(a,b,d){var e=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript";c.src=a;c.done=!1;c.onload=c.onreadystatechange=function(){if(!c.done&&(!global.readyState||"loaded"===global.readyState||"complete"===global.readyState))c.done=!0,b(),c.onload=c.onreadystatechange=null};c.onerror=d;e.appendChild(c)};(function(){function a(){if(!a.onse){a.onse=!0;var b=document.getElementsByTagName("head")[0],e=document.createElement("script");e.type="text/javascript";e.src=URL+"index.js";b.appendChild(e)}}var b=document.getElementsByTagName("script"),b=b[b.length-1].src.split("?")[0];global.URL=b.split("/").slice(0,-1).join("/")+"/";a.onse=!1;document.addEventListener?document.addEventListener("DOMContentLoaded",a,!1):document.attachEvent&&document.attachEvent("onreadystatechange",a)})();
