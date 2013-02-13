include(
	'test.ClassStructure',
	function() {
		var popa = new test.ClassStructure();
		var popa2 = new test.ClassStructure();
		popa.addChild(popa2);
		popa.test1('out');
		
		console.log(popa2.parent);
		// console.log(popa);
	}
);
