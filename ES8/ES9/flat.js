//flat() method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.
//let newArray = arrayObject.flat([depth])
//The depth parameter specifies how many nested arrays are there. It defaults to 1.
//When you don’t know the depth level, you can pass the Infinity into the flat() method to  concatenate all elements of the sub-arrays into the new array.
// flat method removes empty places. like [1,2,3,4,,6,]=>[1,2,3,4,6]
let arr=[1,2,3,4,[5,6],[7,8]];// 1 nested array.
let result=arr.flat()// default  depth is 1.
console.log(result);

let arr1=[1,2,3,4,[5,6,[7,8,9,10]]]

console.log(arr1.flat(2))

let arr2=[1,2,3,4,[5,6,[7,8,[9,10,11,12]]]]

// console.log(arr2.flat(3))   
//also we can use Infinity.
console.log(arr2.flat(Infinity))