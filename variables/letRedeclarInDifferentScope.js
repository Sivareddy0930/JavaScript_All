// variables using let can Redeclar in different scope is possible
//In same scope it is not possible.
let a=10;
if(true){
    let a=20;
    console.log(a);
}
console.log(a);  
