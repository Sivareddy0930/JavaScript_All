let arr1=[12,24,1000,4,49]
arr1.sort()
console.log(arr1);//[ 1000, 12, 24, 4, 49 ] 


//we get this output because sort method first convert values to strings and comapring is done.
//we need output like this 4,12,24,49,1000.
//we can achieve this by using sort(comparefunction).in this we can do comparing 
let arr=[12,24,1000,4,49]
let result=arr.sort(function num(a,b){
    // (12 - 24) is negative, so 12 comes before 24.
    // (24 - 1000) is negative, so 24 comes before 1000.
    // (1000 - 4) is positive, so 4 comes before 1000.
    // (4 - 49) is negative, so 4 comes before 49
    return a-b;
})
console.log(result);