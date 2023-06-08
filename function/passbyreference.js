// function calling can done  by passing reference/address as an arugment .
//Changing the argument inside the function affect the variable passed from outside the function.
//when you pass an object (including arrays and functions or objects) to a function, the reference to the object is passed by value. It means that a copy of the reference to the object is created, but both the original reference and the copy point to the same object in memory. Therefore, changes made to the object's properties inside the function will affect the original object. 

//------------------------------------------------------------------------------------


let person = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  
  increaseAge(person);

  
  console.log(person);
  