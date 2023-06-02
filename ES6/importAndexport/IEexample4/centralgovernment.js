//we just created one variable,function,class and trying to export.
//multiple value(or) item exporting
let tax="18%";
function centralgovernment(){
    console.log(" Central Tax");
}
class central{

}
//ES6 syntax for Multipule values
//export {tax,centralgovernment,central};

//ES5 syntax for multiple values
module.exports={tax,centralgovernment,central}