//Imagine we have an array of objects. How do we find an object that which can pass the specific condition?
//Here the arrayName.find(fn) method comes in handy.

let arr=[{id:1,Name:"siva"},{id:2,Name:"vamsi"},{id:31,Name:"subba"}]
let result=arr.find(item=>item.id==1); // this is condition (item=>item.id==1) .value  present in result that satisfy the condition.
console.log(result.Name);
