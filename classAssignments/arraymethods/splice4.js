let arr=[1,2,3,4,5,6,7,8,9]

let deletedElemts=arr.splice(5,2,"hi","bye!")
console.log(deletedElemts)
console.log(arr)
console.log("===================================")

let arr1=[1,2,3,4,5,6,7,8,9]

arr1.splice(5,0,"aunny","kunny")
console.log(arr1)//[ 1, 2, 3, 4, 5, 'aunny', 'kunny', 6, 7, 8, 9 ]

console.log("===================================")
let arr2=[1,2,3,4,5,6,7,8,9]
arr2.splice(5)
console.log(arr2)//[ 1, 2, 3, 4, 5 ]


