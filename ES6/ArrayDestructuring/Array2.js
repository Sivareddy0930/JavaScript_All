
let array=[10,20,30,40,50,60,70,80];

// const [a, b] = array;
// console.log(a) //10
// console.log(b) //20


// const [a, , b] = array;
// console.log(a) //10
// console.log(b) //30

// const [a=100, b] = array;
// console.log(a) //10  if novalue found it give 100
// console.log(b) //20

// const [a=100, b] = [];
// console.log(a) //100 
// console.log(b) //undefined

// const [a, b, ...rest] = array;
// console.log(a) //10
// console.log(b) //20
// console.log(rest) //[ 30, 40, 50, 60, 70, 80 ]

// const [a,,b, ...rest] = array;
// console.log(a) //10
// console.log(b) //30
// console.log(rest) //[40, 50, 60, 70, 80 ]



// const [a, b, ...{ pop, push }] = array;

const [a, b, ...[c, d]] = array;
console.log(a)
console.log(b)
console.log(c)
console.log(d)