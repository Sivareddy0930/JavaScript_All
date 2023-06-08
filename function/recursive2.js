//A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.
// Every recursive function must consist a condtion . so that it stop the method calling .otherwise it will call itself indefinitely.

//----------------------------------------------------------------------------
//print sum of n natural numbers.
let num=10;
let sum=0;
function numberseries(num){
  
   if(num>0){
    numberseries(num-1);
   }
   sum=sum+num; 

}
numberseries(num)
console.log(sum);