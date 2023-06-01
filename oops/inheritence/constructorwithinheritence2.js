//  constructor  with Inheritance  
//if you have a constructer in child class you must have to call parent class constructor.otherwise you get error.
class parent{
    constructor(){
       
        console.log("parent constructor");
      }

}
class child extends parent{
    constructor(){
       super();
        console.log("child constructor");
    }
}
let obj=new child();
//we can avoid error by using  super(); 

