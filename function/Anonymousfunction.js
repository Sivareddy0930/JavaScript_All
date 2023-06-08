// function without name is called Anonmous function.
  //EXAMPLE:- function (){}
//An anonymous function is not accessible after its initial creation.
//because for function calling we required function name. Therefore, you often need to assign it to a variable.

let show =function (){
    console.log("This is Anonymous function");
}
show();
//-----------------------------------------------------------------------------------------------


//Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.


setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);//Anonymous functions can be used as an argument to other functions

//------------------------------------------------------------------------------------------

//If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:

(function() {
    console.log('IIFE');
})
();

//ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions
