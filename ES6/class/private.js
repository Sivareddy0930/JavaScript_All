//before syntax.
//here name is private that we cannot access outside.

// function outer() {
//     var name = "John";
//     return function inner() {
//       console.log(name);
//     }
//   }
  
//   var closure = outer();
//   closure(); // Output: John
  


//to use private you must prefix the field name with #
class a{
    #id;
    #phone;
    name;
    constructor(id,name){
        this.#id=id;
        this.name=name;
    }
    setmethod(phone){
        this.#phone=phone;
    }
    getmethod(){
        return this.#id+ this.name+this.#phone;
    }}
let obj=new a(101,"siva");
obj.setmethod(9866123628);
console.log(obj.getmethod());
// here i am initilize the private variable with both constructor and set method.