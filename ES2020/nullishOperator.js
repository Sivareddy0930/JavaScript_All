//Introduced in ES2020.
//A nullish value is a value that is either null or undefined.
//The nullish coalescing operator returns the second value (value2) if the first value (value2) is null or undefined.
// represent with ??.
//if  first value is null or undefined it will return second value. 
let Name1 = null ?? "siva";
console.log(Name1);

let Name2 = undefined ?? "siva";
console.log(Name2);

let Name = NaN ?? "siva";
console.log(Name);