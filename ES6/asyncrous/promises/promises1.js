//  Promises provide a way to handle asynchronous operations more easily and avoid callback hell.



// To create a promise in JavaScript, you can use the Promise constructor.
// The Promise() constructor creates Promise objects. 

// The constructor takes a function as an argument, which is called the executor function.
// The executor function has two parameters: resolve and reject. this two rae callback functions. Inside the executor function, you perform your asynchronous operation, and when it completes, you call either resolve or reject to change the promise's state.

//promise has 3 states 
//pending state.=>state before  execuation of resolve or reject function.

const mypromise=new Promise(function(resolve,reject){
        // mypromise is promise
})
console.log(mypromise);

//resolved state.=>after successful execution of resolve function.
const mypromise2=new Promise(function(resolve,reject){
    let getdata=true;
    if(getdata){
        resolve("we got data");
    }
    else{
        reject("data yet to come")
    }
})
console.log(mypromise2);
//reject state.=>after successful execution of reject function.

const mypromise3=new Promise(function(resolve,reject){
    let getdata=false;
    if(getdata){
        resolve("we got data");
    }
    else{
        reject("data yet to come")
    }
})
console.log(mypromise3);

