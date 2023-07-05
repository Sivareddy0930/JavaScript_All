let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

function setData(newData){
    return new Promise(function(resolve,reject){
        //Here setData function return promise object. 
        setTimeout(()=>{

        let commingData=true;
        if(commingData){
            resolve("Data inserted");
                employees.push(newData);
               
        }
        else{
            reject("not inserted");
        }
    },4000)

    })
}

function getData(){
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
setData({ id: 103, name: "Modi", sal: 75000 })
.then((msg)=>{console.log(msg);
                getData() })
.catch((err) => {
    console.log(err)
      })
            


