//flat() method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.
//let newArray = arrayObject.flat([depth])
//The depth parameter specifies how many nested arrays are there. It defaults to 1.
//When you don’t know the depth level, you can pass the Infinity into the flat() method to  concatenate all elements of the sub-arrays into the new array.

let arr=[1,2,3,4,[5,6,[7,8,]]];// nested array with depth 2.
let result=arr.flat(2)// by mention depth 2 or infinity . we will get one new array.
console.log(result);//output:-[ 1, 2, 3, 4, 5, 6, 7, 8]