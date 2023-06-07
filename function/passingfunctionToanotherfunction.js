//passingfunctionToanotherfunction
// like parameters we can pass anotherfunction to a function.
function Anotherfunction(){
   //console.log("Anotherfunction");
    return "Anotherfunction";
}
 function mainfunction(message,func){
   
    console.log(message+" "+func());
    console.log(message +" "+ "mainfunction");

 }
 mainfunction("This is",Anotherfunction)