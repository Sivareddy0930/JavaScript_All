let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }];

function setEmployee(emple){
    setTimeout(()=>{
        employees.push(emple);
    },4000)
}

function getEmployee(){
    setTimeout(()=>{
        let rows='';
       for(emp of employees){
        rows=rows+`<tr><td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.sal}</td> </tr>`
       }
       document.getElementById('abc').innerHTML=rows;
    },1000)
}
setEmployee({ id: 103, name: "Modi", sal: 75000 })

getEmployee();