//Sometimes, you need to take an array, transform its elements, and include the results in a new array.

//Here, transform means  performing some operations on elements.

//Typically, you use a for loop to iterate over the elements, transform each individual one, and push the results into a new array.
//example

/*let offers=[99,199,299,399]

let newoffers=[]

for(let i=0;i<offers.length;i++){
        newoffers.push(offers[i]+1);
}
console.log(newoffers);*/

//-------------------------------------------------------------------------------------------------------------------

//JavaScript Array type provides the map() method that allows you to transform the array elements in a cleaner way.

// map method it iterate over the array and execute the function to every array element. finally it return new array.

//The map() method calls a callback function ( here callback function represent updateoffer()) on every element of an array and returns a new array that contains the results.

//The map() method takes two named arguments, the first one is required whereas the second one is optional.
          //first arugment represent current element in array.
          //second arugment represent  the index of the currentElement.

//The map() method will call the circleArea function on each element of the circles array and return a new array with the elements that have been transformed.

let offers=[99,199,299,399]
 
let newoffers=offers.map(function updateoffer(offer){
        return offer+5; // this return statement returns new array
        
});
console.log(newoffers);
//It’s important to note that the map() method does not change the original array, it creates a new array of all elements that have been transformed by the callback function.