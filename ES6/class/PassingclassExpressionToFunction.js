//passing class expresion to function .

function greet(aclass){
    return new aclass();//Here we are returning object for a class.
}
//Here function greet taking a class as arugment and returning instance of class.

//let sayHi=greet()  this is a function calling.that assign to a variable 

let sayHi=greet(class{                  // class Expression
    show(){console.log("Hi Buddy!");}
});
  
sayHi.show();

// Here greet function takes class and return a object(instance) that hold by sayHi variable .
//so we write sayHi.show() syntax .to access metyhod.