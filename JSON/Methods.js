let obj={name:"okay",msg:"hi"}
console.log(typeof obj)

console.log(obj)

let jsonStringObject = JSON.stringify(obj);
//it converts to json object and return that object as a string.
//"{"name":"okay","msg":"hi"}"


console.log(jsonStringObject)
console.log(typeof jsonStringObject)

//=======================================================================

let normalObject=JSON.parse(jsonStringObject)
//it converts json string to normal javascript object.
console.log(normalObject)
console.log(typeof  normalObject)