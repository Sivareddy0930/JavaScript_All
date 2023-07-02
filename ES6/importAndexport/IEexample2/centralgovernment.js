//we just created one variable,function,class and trying to export.
//single value(or) item exporting
let tax="18%";
function centralgovernment(){
    console.log(" Central Tax");
}
class central{

}
//ES6 syntax
//export default tax; 

//ES5 syntax
module.exports=tax;

// we know that above used ES5 syntax 
// it is  gone work because node environment is  support for ES5.