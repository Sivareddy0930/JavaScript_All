// function calling can be done by passing a value of the  variable as an arugment .
//It is important to note that in javascript, all function arguments are always passed by value. That is, JavaScript copies the values of the passing variables into arguments inside of the function.
//In JavaScript, primitive types, such as numbers, strings, booleans, null, and undefined, are passed by value. When you pass a primitive value to a function, a copy of the value is created, and any changes made to the parameter inside the function do not affect the original value.
let a=10;
function add(x){
    x=x+x;
return x;

}
let result= add(a);
console.log(result);
console.log(a);// a value not changed 