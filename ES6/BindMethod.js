let obj1={
    name:"okay"
}

let printName=function(salary,dept){
    console.log(this.name+" "+salary+" "+dept)
}



const empObj = printName.bind(obj1,100000,"cse");//here it just store as new function in empObj.

console.log(empObj)
empObj();
