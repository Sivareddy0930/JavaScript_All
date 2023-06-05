//from method is used to convert Arugments to an array format.

/*

ES6 introduces the Array.from() method that creates a new instance of the Array from an array-like or iterable object. 

Array.from(target [, mapFn[, thisArg]])

In this syntax:

1)target is an array-like or iterable object to convert to an array.

2)mapFn is the map function to call on every element of the array.   (it will applicable to all elements in array)

3)thisArg is the this value when executing the mapFn function.(optional)

The Array.from() returns a new instance of Array that contains all elements of the target object.

*/ 




function arrayFromArgs() {
    return Array.from(arguments);
}

console.log(arrayFromArgs(1, 'A'));