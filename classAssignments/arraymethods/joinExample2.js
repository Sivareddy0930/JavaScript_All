//works same as like toString() method.
//The join() method also joins all array elements into a string.
//When the elements of the array aren’t strings, the join() method converts them to strings before joining.
  
//Note that the join() method converts undefined, null, and empty array [] to an empty string.



const cssClasses = ['btn',['btn-primary', 'btn-active']];
const btnClass = cssClasses.join();
const btn=btnClass.split(",")
console.log(btn)



// it also join nestead arrays.


// const cssClasses = ['btn',['btn-primary', 'btn-active']];
// const btnClass = cssClasses.join(' ');

// console.log(btnClass);//btn btn-primary,btn-active