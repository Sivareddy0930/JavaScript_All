//callback function means a function that you can pass in to another function as an arugment.
// it execute inside that function.
// callback functions are used control the execuation of function.


function one(value,callback){
    callback(value+1,false);//here result1=value+1 and error=false
}
function two(value,callback){
    callback(value+1,false);
}
function three(value,callback){
    callback(value+1,false);
}

//calling functions
one(1,(result1,error)=>{
    if(!error){//if no error then call function two.
        two(result1,(result2,error)=>{
            if(!error){
                three(result2,(result3,error)=>{
                    if(!error){
                        console.log("Final Result="+result3);
                    }
                })
            }
        })
    }
});

// In the given code, the functions one, two, and three take a value and a callback function as arguments. They perform some operations and invoke the callback function when they are done. Each callback function receives the result of the previous operation and an error flag.

// The nested callbacks demonstrate an asynchronous control flow. Each subsequent function is called within the callback of the previous function, forming a chain of asynchronous operations. The code waits for each function to complete before proceeding to the next one.

// The console.log statement inside the callback of three is executed only after all the previous asynchronous operations have completed successfully. This is because each callback is triggered when the corresponding function finishes, allowing the program to continue executing other tasks in the meantime.
//***************************************************************************************************************
//One common issue for using the callback approach is that when we have to perform multiple asynchronous operations at a time,
//complexcity of code is increase and hard to manage
// we can easily end up with something that is known as callback hell.
//example: above we have only 3 function what if we have 20 functions the code complexcity is increases this is consider as callback hell.to avoid this we use promises and async&await.