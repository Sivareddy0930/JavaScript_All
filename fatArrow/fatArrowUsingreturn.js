//difference between normal function and fat-Array function .(With single line syntax).
//you can call a function  N no.of times.


function add(a,b){
    return a+b;
}
let result=add(2,2)
console.log(result);

// Shot way to define a function  using fat-Array syntax
//    =>  arrow represent function.

let sum=(a,b)=>{
    return a+b; 
}
 let result1=sum(20,20);
 console.log(result1);

//if you have one arugament you can write a function in one line  using fat-Array function.
let text= name =>"my name:"+name
console.log(text("siva"));
//if we use to two parameter we must need to use parenthasis ().
let myfullname=(firstname,lastname)=> "My full Name is "+firstname+lastname
console.log(myfullname("Venkata Siva Reddy ","Tumu"));



