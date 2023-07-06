//The async keyword is used to  :-allows you to define a function that handles asynchronous operations.

// To define an async function, you place the async keyword in front of the function keyword

// async function return a promise.

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });//resolveAfter2Seconds function return promise.
  }
  async function asyncCall() {
//If a function returns a Promise object, you can place the await keyword in front of the function call.
   //so Here we placed resolveAfter2Seconds function after await keyword.
//await makes resolveAfter2Seconds function in waiting stage until that function return promise i.e (resolve or reject) and returns its result .vachina result variable res lo store ithundee.
    const res = await resolveAfter2Seconds();
    console.log(res);
    // Expected output: "resolved"
  }

// mana ke result vastundi after successful waiting for complition of resolveAfter2Seconds function adhi res lo  store avuthundi and if we print it we got expected out that is "resolved".
//but that output is also a promise(we know always  async function return a promise.).
  
  asyncCall();
  