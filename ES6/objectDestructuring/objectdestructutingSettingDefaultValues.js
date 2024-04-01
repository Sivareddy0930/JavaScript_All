//ES6 provides alternative syntax to assign the properties of an object to variables.


let emp={
    id:1,
    Name:"siva",
    sal:50000
};
let {id,sal:salary=49000,lastname="hi"}=emp;//Here lastname properties is not define in emp object. we providing default values to it.
// sal is already declared in object emp .but we also provideing default value for sal .if sal propertie is not there  default value will print.
console.log(id);
console.log(salary);
console.log(lastname);//hi
console.log(emp)
