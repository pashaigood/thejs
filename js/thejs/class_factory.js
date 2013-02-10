function class_factory(class_data, class_name, namespace) {
	var params = {
			my : {},
			pub : {},
			our : {}
		},
		class_body,
		postfix = body_cut(class_factory.postfix),
		prefix = body_cut(class_factory.prefix),
		class_name_rgx = /_/gm,
		full_class_name_rgx = /\$/gm;
	
	context(params, class_data);
	
	class_body = body_cut(
		class_data,
		prefix
			.replace(class_name_rgx, class_name)
			.replace(full_class_name_rgx, namespace +'.'+class_name),
		postfix.replace(class_name_rgx, class_name)
	);
	
	for (var i in params.pub) {
		var rgx = new RegExp("self\\s*.\\s*"+i, 'gm');
		class_body = class_body.replace(rgx, "this."+i);
	}
	
	return new Function(class_body);
}

class_factory.prefix = function() {
	var pub = {},
		my = {},
		our = {},
		_ = $;
}

class_factory.postfix = function() {
	var args = [],
		i = 0,
		length = arguments.length,
		self = my;
	for (i in pub) {
		_.prototype[i] =  pub[i];
	}
	
	for (i; i < length; i++){
		args.push(arguments[i]);
	}
	
	return pub._.apply(this, args);
}
