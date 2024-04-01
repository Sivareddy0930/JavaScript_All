//if you want to perform any opertions that has highest number that which is diffult to handle.we use BigInt

let bigNum=Number.MAX_SAFE_INTEGER;
console.log(bigNum)//9007199254740991

console.log(bigNum+24)// it is not an expected output 9007199254741016

//to handle this we us bigInt 

console.log(9007199254740991n+24n)//9007199254741015n
//by adding at n at end represent bigInt 