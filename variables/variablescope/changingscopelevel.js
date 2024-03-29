//updating global variable in function .(local variable) 
//it will update the whole global scope  after the function execution.
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
let message = 'Hello, ' + userName;
  console.log(message);
}

console.log(userName); // John before the function call

showMessage();

console.log(userName); // Bob, the value was modified by the function

//-------------------------------------------------------------------------------------------------------------------------------

// var userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   var message = 'Hello, ' + userName;
//   console.log(message);
// }

// console.log(userName); // John before the function call

// showMessage();

// console.log(userName); // Bob, the value was modified by the function