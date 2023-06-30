// ...(thripple dot) is used as both spread and  rest operator.
//Here are the main differences:
                //The spread operator (...) unpacks the elements of an iterable object.
                //The rest parameter (...) packs the elements into an array.

//The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
// spread operator allows to use with arrays(iteratives like map....etc) and object.

//JavaScript spread operator and array manipulation:-
//Spread can used to Copying an array.
//Spread can used to Constructing array literal(or Extands AnotherArray).
//Spread can used to Concatenating arrays(mearge array).

//----------------------------------------------------------------------
//copying array
let arr=[1,2,3,4];
let arrcopy=[...arr];
console.log(arrcopy);

