//passingfunctionToanotherfunction
// like parameters we can pass function to  anotherfunction.

 //here  we use console.log("Anotherfuction") instade of return statement.


 function Anotherfunction(){
    console.log("Anotherfunction");
     //return "Anotherfunction";
 }
  function mainfunction(message,func){
    let result=func();
     console.log(message+" "+result);
     // function func() give output as "AnotherFunction"
     // arugment message will give output as "This is" .
     //console.log(message+" "+result);  ===> After func() execution  ===> console.log(message+" "+Anotherfunction);
     //upto here working fine but those outputs we got above that are placed in console.log() that the error
     //because Anotherfunction is a output string that we get from firstmethod. that we are try to print again.
     // console.log(message+" "+Anotherfunction);  ====> after console.log execution ===> actual output we need is ==> This is Anotherfunction but we get ==>This is Undefined.
     //so we got undefined 


     console.log(message +" "+ "mainfunction");
 
  }
  mainfunction("This is",Anotherfunction)
  