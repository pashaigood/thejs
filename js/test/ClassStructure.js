namespace('test', function() { return {
    //class require
	require : [
       test.subtest.Class3,
       test.subtest.Class2
	],
	//Class description
	ClassStructure : { extend : [Array, test.subtest.Class2],
        //Class static method
        our : {
            POPA : 1,
            TEST : 2,
            GET : function()
            {
                return 'it';
            }
        },
        //Class property
        property0 : 1,
        property1 : 2,
        //Class constructor
        ClassStructure : function()
        {
            this.Super();
            this.on('popa', function(){
                console.log('on popa');
            });
            
            console.log(this.push);
        },
        //Class method
        test1 : function(what)
        {
            this.play('popa');
            console.log(what);
        }
    }
}});