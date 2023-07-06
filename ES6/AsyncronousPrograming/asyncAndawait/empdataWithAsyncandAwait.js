let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

function pushData(newemp){
   return new Promise(function(resolve,reject){
    setTimeout(()=>{
    let datapush=true;
    if(datapush){
        resolve(" Hurry! Data Inserted Sucessful");
        employees.push(newemp)
    }
    else{
        reject("not Inserted!")
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

async function Data(){
    let res=await pushData({ id:103, name: "Modi", sal: 75000 });
   console.log(res);// this will displayed in console level in inspect page.
    getData();

}
Data();