// Rest operator is used to pack the elements into an array.
// It is used with functions parameters to hold arugments.


// function empids(a,...b){
//     console.log(a,b);
// }
// empids(1,2,3,4,5,6,7,8,9)

let empid=(a,...b)=>{return {a,b}}
console.log(empid(1,2,3,4,5,6,7,8,9));