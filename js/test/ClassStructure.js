namespace('test', {
	require : [
       'test.subtest.Class3'
	],
	ClassStructure : function() {
		// static property
		static. TEST = 1;
		static. POPA = 2;
		
		// public property
		public. test = 3;
		
		// private property
		var popa = 4;
		
		// public method
		public. ClassStructure = function() {
			test1();
		}
		
		public. test1 = function() {
			console.log('public');
		}
		
		// private method
		var test1 = function(from) {
			console.log('private');
		}
	},
	Class2 : function() {
		static. TEST = 2;
		
		public. Class2 = function() {
			console.log('Class2');
		}
	}
});