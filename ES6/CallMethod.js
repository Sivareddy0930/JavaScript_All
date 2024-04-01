let obj1={
    name:"okay"
}

let printName=function(salary,dept){
    console.log(this.name+" "+salary+" "+dept)
}
let obj2={
    name:"okayBro!"
}

// printName.call(obj1)
// printName.call(obj2)


printName.call(obj1,10000,"cse")
printName.call(obj2,50000,"ece")