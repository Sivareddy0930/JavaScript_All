//callback function means a function that you can pass in to another function as an arugment.

// that means while executing function1 .at same time function2 is also called and executed.

// it execute inside that function.
// callback functions are used control the execuation of function.

function add(a,b){
    return a+b;
}

function mult(a,b){
    return a*b;
}


function calc(a,b,callback){   //here function1 calc is excuting at same time.
    return callback(a,b);      //function2 is called and executed with parallel to function1. so we are achiveing asyncronous programming.
}
 
let a=calc(2,2,add);
console.log(a);
let b=calc(2,4,mult);
console.log(b);
let c=calc(6,2,(a,b)=>{
    return a-b;
});
console.log(c);

