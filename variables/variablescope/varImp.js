//In var concept Redeclaring var inside block will also effect outside block
var i=10;
function f(){
  var i=20;
  if(true){
    var i=40;
    console.log(i);
  }
  console.log(i);
}
f();
console.log(i);
