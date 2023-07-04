//singleton is a design pattern that tells us that we can create only one instance of class.And that instance can be accessed gloablly.
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