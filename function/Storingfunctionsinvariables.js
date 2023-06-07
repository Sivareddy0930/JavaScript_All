//Storing function in variable

function add(a,b){
    return a+b;
} 
let sum=add;//we don’t include the opening and closing parentheses at the end of the add identifier. We also don’t execute the function but reference the function.
// reference of the add is sum
console.log(sum); //here sum consist of add method.but it is not executable.

//we can have two ways to execute the same function. For example, we can call it normally as follows:
let result=add(2,2);
console.log(result);

//Alternatively, we can call the add() function via the sum variable like this:
let results=sum(4,4);
console.log(results);