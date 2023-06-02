//Here we are importing
//ES6 syntax
//import {tax,centralgovernment} from './centralgovernment'

//ES5 syntax
const {tax,centralgovernment}=require('./centralgovernment')
console.log(tax);
centralgovernment();

// we know that above used ES6 syntax 
// it is  gone work because node environment is  support for ES5.