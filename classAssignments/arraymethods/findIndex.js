//if we need index of an object from array that which can satisfy a particular condition.
//Here the arrayName.findIndex(fn) method comes in handy.
// it will give first occurence.
//it functions accept arugments.

//first arugment represent current element in array.
//second arugment represent  the index of the currentElement.(optional arugment .no need to mention)

let arr=[{id:1,Name:"siva"},{id:2,Name:"vamsi"},{id:31,Name:"subba"}]
let result=arr.findIndex(item=>item.id==1); // this is condition (item=>item.id==1) .value  present in result that satisfy the condition.
console.log(result);
