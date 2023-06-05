//JavaScript Array type provides the map() method that allows you to transform the array elements in a cleaner way.

// map method it iterate over the array and execute the function to every array element. finally it return new array.

//The map() method calls a callback function ( here callback function represent updateoffer()) on every element of an array and returns a new array that contains the results.

//The map() method takes two named arguments, the first one is required whereas the second one is optional.
          //first arugment represent current element in array.
          //second arugment represent  the index of the currentElement.

//The map() method will call the circleArea function on each element of the circles array and return a new array with the elements that have been transformed.

let offers=[99,199,299,399]
 
let newoffers=offers.map(offer => offer+1);// arrow function .
//it returns to new array.

console.log(newoffers);
//It’s important to note that the map() method does not change the original array, it creates a new array of all elements that have been transformed by the callback function.