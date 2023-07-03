//syncronous programming means execute one after another.
//check in debug console to better understanding.


// all these execute one after another.
console.log("Statement 1");
console.log("Statement 2");
console.log("Statement 3");
console.log("Statement 4");

//To prove that above statements executeing one after another.Here small example is there.

console.log("Statement 5");
console.log("Statement 6");

let sum=0
for(let i=0;i<10000000000;i++){
    sum=sum+1;
}
//After statement 6.  
console.log(sum);//These sum take some to time execute because it a large number to process and add.
//untile we get sum all remaining statements like 7,8 are in blocked state(or waiting statement).
//After execution of sum statement .remaining statement will execute. so Here we prove that all statements are execute one after another.

console.log("Statement 7");
console.log("Statement 8");