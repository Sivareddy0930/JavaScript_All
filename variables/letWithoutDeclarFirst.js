//if we not declar before use it will  give Error.
function sayHi() {
  console.log(phrase); //Error
  
    let phrase = "Hello";
  }
  
  sayHi();