//ES6 provides alternative syntax to assign the properties of an object to variables.


let emp={
    id:1,
    Name:"siva",
    sal:50000
};
let {id:EmpId,Name:Empname}=emp;
console.log(EmpId);
console.log(Empname);

//In this Example id and Name properties of object are assigned to EmpId,Empname respectively.
//The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.




//If the variables have the same names as the properties of the object, you can make the code more concise .

let {id,Name,lastname}=emp;//Here lastname properties is not define in emp object.so it reurn undefined
console.log(id);
console.log(Name);
console.log(lastname);//undefined
