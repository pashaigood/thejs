include(
	'test.ClassStructure',
	function() {
		var popa = new test.ClassStructure();
		popa.test1('out');
	}
);

/*var test = 2;

function f1() {
	test += 1;
	console.log(test, this);
	
	this. superTest = function() {
		console.log(test);
	}
}
*/
/*var popa = {};
context({test:5}, f1, popa);

console.log(popa);
popa.superTest();
//var test_object = {test:4};
//f2(test_object.test);
//console.log(test_object.test)

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
//	console.log(temp_func);
	try {
		temp_func.apply(ctx2, params);
	} catch (e) {
		console.log(e.stack);
	}
}*/