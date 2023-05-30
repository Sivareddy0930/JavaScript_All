//if we not declar before use it will  give undefined.
function sayHi() {
  console.log(phrase);
  
    var phrase = "Hello";
  }
  
  sayHi();