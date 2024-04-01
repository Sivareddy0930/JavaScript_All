let name="okay";

// padStart(targetLength)
// padStart(targetLength, padString)

console.log(name.padStart(10));// if no padString is mentioned spaces are added.
console.log(name.padStart(10,"123456789"));


//Example:-2

const fullNumber = '2034399002125581';
const last4Digits=fullNumber.slice(-4);
const output = last4Digits.padStart(fullNumber.length,"*");
console.log(output)


//padEnd()