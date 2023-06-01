//  constructor  with Inheritance  
//if you have a constructer in child class you must have to call parent class constructor.otherwise you get error.
class parent{

}
class child extends parent{
    constructor(){
       
        console.log("child constructor");//got error:-Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }
}
let obj=new child();
//we can avoid error by using  super(); 
//if here no constructor is avaliable in parent while we calling with super(); .
//defalut constructor is executed that is avliable by default .

/*
class parent{

}
class child extends parent{
    constructor(){
       super();
        console.log("child constructor");
    }
}
let obj=new child();
 */

//output:-child constructor
//no error will occur because default constructor is called by super();.

