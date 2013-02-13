include(
    'jquery.index',
    'jquery.ui.index',
	'test.ClassStructure',
	function() {
		var popa = new test.ClassStructure();
		var popa2 = new test.ClassStructure();
		
		popa.addChild(popa2);
		popa.test1('out');
		popa.superTest();
	}
);
