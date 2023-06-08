//A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.
// Every recursive function must consist a condtion . so that it stop the method calling .otherwise it will call itself indefinitely.

//----------------------------------------------------------------------------
//print 1 to 10 using recursive function.
let num=1;
function numberseries(num){
    console.log("number"+num);
   if(num<10){
    numberseries(num+1);
   }
}
numberseries(num)