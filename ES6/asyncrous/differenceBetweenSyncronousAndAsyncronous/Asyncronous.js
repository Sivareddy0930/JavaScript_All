//Asyncronous programing allows you to run multiple tasks at a time. you don't have to wait until  finishing the execution  of the current thing in order to move on to next one.

console.log("Statement 1");
console.log("Statement 2");
setTimeout(()=>{
    console.log("statement 3");
},4000);
console.log("Statement 4");


// let imagine every statement take time 1 sec to execute but statement 3   take 4 seconds.
//unlike syncronous here all statements execute at a time without depends on another.
//so that statement 1,2,4 execute fastly and then statement 3 will execute after 4 seconds.

//** Here setTimeout is a callback function that accept function as arugment and execute the provided function after paricular time interval.
// This callback function is used to achive asyncronous programing.