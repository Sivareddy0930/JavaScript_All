function add(){
    console.log("function overridingconflit m1");
}
add();
function add(){
    console.log("function overridingconflit m2");
}
add();
// we get output as same for both functions.
//to avoid this conflit we use fatArrow function.

var sum=()=>{console.log("fatArrow m1");}
sum();
var sum=()=>{console.log("fatArrow m2");}
sum();
