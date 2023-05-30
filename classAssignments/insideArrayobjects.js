// let employees=[{id:1},{id:1},{id:3},{id:4}]
// for(emp of employees){
//     console.log(emp.id);
    
// }
//Both are correct but we using different loops
let employees = [{ id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }]

console.log(employees)

//print employee id 
console.log(employees[0])
console.log(employees[1])
console.log(employees[2])
console.log(employees[3])

for (let i = 0; i <= 3; i++) {
    //console.log(employees[i])
    console.log(employees[i].id)
}

