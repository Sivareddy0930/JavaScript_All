//The fill() method fills specified elements in an array with a  single value.
//The fill() method overwrites the original array.
//array.fill(value, start, end)

//if we not mention start and end index .it will overwrites with all elements in array.

let arr=["java","python","html","css","bootstrap"]
console.log(arr);
let result=arr.fill("Programing",0,2);
console.log(result);