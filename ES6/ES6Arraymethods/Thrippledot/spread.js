// ...(thripple dot) is used as both spread and  rest operator.
//Here are the main differences:
                //The spread operator (...) unpacks the elements of an iterable object.
                //The rest parameter (...) packs the elements into an array.

//The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
// spread operator allows to use with arrays(iteratives like map....etc) and object.

//JavaScript spread operator and array manipulation:-
//Spread can used to Copying an array.
//Spread can used to Constructing array literal (or Extands AnotherArray).
//Spread can used to Concatenating arrays(mearge array).

//----------------------------------------------------------------------
//Spread can used to Constructing array literal (or Extands AnotherArray).
//The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form.
let arr=[1,2,3,4];
let arr2=[...arr,5,6,7,8];
console.log(arr2);

