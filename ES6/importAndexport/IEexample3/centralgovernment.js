//we just created one variable,function,class and trying to export.
//multiple value(or) item exporting
let tax="18%";
function centralgovernment(){
    console.log(" Central Tax");
}
class central{

}
//ES6 syntax for Multipule values
export {tax,centralgovernment,central};

// we know that above used ES6 syntax 
// it is not gone work because node environment is not support for ES6.