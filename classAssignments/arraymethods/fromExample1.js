// Without From method we have to perform like this.



// first we have to provide parameters that will give to function .
// Here arugments are not avaliable in function  to collect parameters.
//but arugments object will collect all of it.
//Then we will create a array from normal parameters. 

/*function arrayFromArgs() {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);*/

// Another way to do
let a=1,b=2,c=3;
let arr=[]
arr.push(a)
arr.push(b)
arr.push(c)
console.log(arr);