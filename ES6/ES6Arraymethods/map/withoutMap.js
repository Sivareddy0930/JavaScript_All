//Sometimes, you need to take an array, transform its elements, and include the results in a new array.

//Here, transform means  performing some operations on elements.

//Typically, you use a for loop to iterate over the elements, transform each individual one, and push the results into a new array.

let offers=[99,199,299,399]

let newoffers=[]

for(let i=0;i<offers.length;i++){
        newoffers.push(offers[i]+1);
}
console.log(newoffers);