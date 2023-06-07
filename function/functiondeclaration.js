//function is a collection(or) group of statements which is used to preform a task.
//To avoid repeating the same code all over places, you can use a function to wrap that code and reuse it.
//When declaring a function, you specify the parameters. However, when calling a function, you pass the arguments that are corresponding to the parameters.


// function add(){
//     console.log("This is function");
// }
// add();

//-------------------------------------------------
function add(a,b){ // a,b are parameters.
    return a+b;
}
console.log(add(2,2)); // 2,2 are arugments.

/*The return statement is used to return a particular value from the function to the function caller. 
The function will stop executing when the return statement is called.
 The return statement should be the last statement in a function because the code after the return statement will be unreachable.*/