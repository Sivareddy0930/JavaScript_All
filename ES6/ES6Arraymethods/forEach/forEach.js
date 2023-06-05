//The forEach() method iterates over elements in an array and executes a  function that's once per element.

//The callback function that the forEach() method uses to execute on every element.(same like map method also consist callback function it  also accepts arugments)

//The callback accepts the following arguments:

//first arugment represent current element in array.
//second arugment represent  the index of the currentElement.(optional arugment .no need to mention)

// Note that the forEach() function returns undefined therefore it is not chainable or (not return new array) like other iterative methods: filter(), map(), some(), every(), and sort()

let offers=[99,199,299,399]
let newoffers=offers.forEach(function updateoffer(offer){ //offer arugment represent current value an array.
        return  offer+1;//because for each will not holds return statements to generate an array like map method.



});
console.log(newoffers);// output will be undefined

