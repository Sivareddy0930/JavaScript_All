/*let arr=[12,24,1000,4,49]
arr.sort()
console.log(arr);//[ 1000, 12, 24, 4, 49 ] */


//we get this output because sort method first convert values to strings and comapring is done.
//we need output like this 4,12,24,49,1000.
//we can achieve this by using sort(comparefunction).in this we can do comparing 
let arr=[12,24,1000,4,49]
let result=arr.sort(function num(a,b){
    return a-b;
})
console.log(result);