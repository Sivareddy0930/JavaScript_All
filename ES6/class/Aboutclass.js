// classes are ES6 features.
//Before ES6 there is no concept of classes in javascript.
//In javascript  classes are just like a special functions.


// javascript class is a blueprint  for creating objects.
//class that holds data(proparties) and functions(methods).

//In javascript always add method constructor.

class Details{
     name="siva";//prorerties.

    constructor(){  } // consructor method.  
    
     empdetails() {
        console.log(this.name);  // normal method
    }
}
let obj=new Details();
obj.empdetails();

//To verify the fact that classes are special functions, you can use the typeof operator of to check the type of the Person class. 
console.log(typeof(Details));//function
