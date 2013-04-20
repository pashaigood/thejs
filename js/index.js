include(
    'jquery.index',
    // 'jquery.ui.index',
	'test.ClassStructure',
	function() {
		var popa = new test.ClassStructure();
		// popa.toString = function() {
		    // // console.profile('test.ClassStructure');
		    // return false;
		// }
// 		
		// popa.valueOf = function() {
		    // console.log('run why');
		    // return "dad";
		// }
		
		// var popa2 = new test.ClassStructure();
		
		// popa.addChild(popa2);
		// popa.test1('out');
		// popa.superTest();
	    console.log(test.ClassStructure.POPA);
	    console.log(popa);
	}
);
