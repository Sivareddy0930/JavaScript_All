//if we need index of an object from array that which can satisfy a particular condition.
//Here the arrayName.findIndex(fn) method comes in handy.
// it will give first occurence.
//it functions accept arugments.

//first arugment represent current element in array.
//second arugment represent  the index of the currentElement.(optional arugment .no need to mention)


// Question:- get the index of the first occurrence of the number 7 after the index 2 in the array ?
 
let ranks=[1,4,7,2,9,4,8,4,7]//genarally findIndex method return  first occurence.but here we need   the number 7 after the index 2 in the array.
let result=ranks.findIndex((rank,index)=>{ // here we know that it accept arugements like current value of an array,index of an current value
    return rank==7 && index >2;                                                      // current value of an array => rank.
                                                                                     //index of an current value => index.
});
console.log(result);