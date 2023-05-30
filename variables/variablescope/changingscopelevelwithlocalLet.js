//redeclaring the variable in local will not effect to global variable.
//but in updating concept it will change the global variable. 
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log(userName); // John, unchanged, the function did not access the outer variable