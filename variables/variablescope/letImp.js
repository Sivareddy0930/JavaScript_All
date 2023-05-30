//In let concept Redeclaring let inside block will also effect outside block
let i=10;
function f(){
  let i=20;
  if(true){
    let i=40;
    console.log(i);
  }
  console.log(i);
}
f();
console.log(i);
