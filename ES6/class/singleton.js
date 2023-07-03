//singleton is a design pattern that limits the instantiation of the class to single instance.(Simply there is only one object throughtout the system or class). 

//Class expressions can be used to create a singleton by calling the class constructor immediately.

//To do that, you use the new operator with a class expression and include the parentheses at the end of class declaration .

// let a= new class{}();    syntax

let a= new class{ 
    Myname;//variable declaration 
    constructor(name){
        this.Myname=name;
    }
    show(){
        console.log("My name is "+this.Myname);
    }
}("Tumu Venkata Siva ReddY");//Here we are providing value to constructor(initialization of object)


a.show();


// for detail explination 

//This is class Expression-------------------------------------
// class{ 
//     Myname;//variable declaration 
//     constructor(name){
//         this.Myname=name;
//     }
//     show(){
//         console.log("My name is "+this.Myname);
//     }
// }


// This is the constructor that we call immediately after class expression.
//("Tumu Venkata Siva ReddY")



//Whole this object is store in variable a.
//so we calling method like this a.show();