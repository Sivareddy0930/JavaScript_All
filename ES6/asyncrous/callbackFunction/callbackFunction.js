//callback function means a function that you can pass in to another function as an arugment.
// it execute inside that function.
// callback functions are used control the execuation of function.

function add(a,b){
    return a+b;
}

function mult(a,b){
    return a*b;
}


function calc(a,b,callback){
    return callback(a,b);
}
 
let a=calc(2,2,add);
console.log(a);
let b=calc(2,4,mult);
console.log(b);
let c=calc(6,2,(a,b)=>{
    return a-b;
});
console.log(c);

// function one(value,callback){
//     callback();
// }
// function two(value,callback){
//     callback();
// }
// function three(value,callback){
//     callback();
// }


// one(100,()=>{
    
// })