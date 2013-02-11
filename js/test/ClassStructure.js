namespace('test', 
{
    //class require
	require : [
       'test.subtest.Class3'
	],
	//Class description
	ClassStructure : { extend : [Array],
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
            console.log(this.push);
        },
        //Class method
            test1 : function(what)
            {
                console.log(what);
            }
        }
});