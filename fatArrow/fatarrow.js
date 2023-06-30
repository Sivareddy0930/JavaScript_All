//fatArrow function is used to conscise the code  or it is the shorter representation of a function.
//Advantages of  fat arrow functionn
//short code 
//implicit return type ( we don't need to use return keyword.)
//this keyword ==> this keyword represent the current object.
                 //  normal function with this  it will give object context bigger.
                 // by useing fat arrow function with this  we can avoid object context to empty.
//function overriding conflict is resolved.

// function add(a,b){
//     console.log(a+b);
// }
// add(2,2)
let add=(a,b)=>{
    console.log(a+b);
}
add(2,2)