// toString => represent the String format of an array


let arr1=["siva",100,4.4,true]
let s=arr1.toString();
console.log(s);//siva,100,4,4,true 
// defining a nested array
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array 
let resultingArray = nestedArray.toString();

console.log(resultingArray);

