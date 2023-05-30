//Array elements can be deleted using the JavaScript operator delete.
//if we use delete operation at one position. If we try to access after it will give empty (or) undefined
let arr=["Banana", "Orange", "Lemon", "Apple", "Mango"]
delete arr[0];
console.log(arr);