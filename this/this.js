"use strict"

console.log(this)
//=======================================================
function fun(){
    console.log(this)
}
fun();
window.fun();
//==================================================
let obj={  
    Id:101,
    x:function(){ console.log(this)}    
    }
    
    obj.x(); 
//================================================
    let student1={  
        name:"appy",
        printName:function(){ console.log(this.name)}    
        }
        
        student1.printName(); 

        let student2={  
            name:"buppy",
            }
            
            student1.printName.call(student2); 
//=========================================================

let f=() =>{
    console.log(this)
}
f();
//==========================================================

let object={
    id:102,
    m2:()=>{console.log(this)}
}
object.m2();
//==========================================================
let object1={
    id:102,
    m2:function(){
      let x = ()=>{console.log(this)};
      x();
    }
}
object1.m2();

