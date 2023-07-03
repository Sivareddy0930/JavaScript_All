//Similar to functions .class are also have expressions .
//class expression are used to define classes in alternative way.
// class expression can be used to create singleton object.
//class expression don't required an identifier after class keyword.
//you can hold the class expression in variable.so that you can use it in function arugments.

let myclass=class{
    id=101;
    constructor(){}
    show(){
        console.log("Emp id is "+this.id);
    }
}
let a=new myclass();
a.show();