//if we need an object from array that which can satisfy a particular condition.
//Here the arrayName.find(fn) method comes in handy.
// it will give first occurence.
//it functions accept arugments.

//first arugment represent current element in array.
//second arugment represent  the index of the currentElement.(optional arugment .no need to mention)
let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];

// find the first customer whose credit is greater than 100.
 let result=customers.find((customer)=>{
    return customer.credit > 100;

});
console.log(result.name);
