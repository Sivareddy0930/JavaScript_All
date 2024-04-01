//var keyword
// no block scope


// if(true){
//    var a=10;
// }
// console.log(a);

var a=10;
var a,b,c=20;
console.log(a,b)
// const a=30;
// let a=100;
for(var i=1;i<=4;i++){
    let a=30;
    var na="siva";
}
console.log(i);//5
console.log(na);//siva

console.log(typeof(a))
//we are accessing out side block