//filter method is used to filter the array.
// same like map it will itrerate array and apply function and reurn  new array.

// It returns a new array containing only the elements for which the callback function returns true. 

//callback function consist of arugmnts like value,index of value,array.



// let arr=[1,2,3,4,5,6,7,8,9]
//  let result=arr.filter((value)=>{
//     return value%2==0;
// });
// console.log(result);

let arr=[1,2,3,4,5,6,7,8,9]
 let result=arr.filter((value)=>{
    return value%2==0;
});
console.log(result);




// Question:-can we make transforming using filter method
//Answer:-No, the filter method in JavaScript is specifically designed for filtering elements of an array based on a condition. It does not provide built-in transformation functionality.
