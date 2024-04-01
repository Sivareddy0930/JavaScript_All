let exObj=[{id:101,name:"okay1"},{id:102,name:"okay2"},{id:103,name:"okay3"}]

function addData(data){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            let commingData=true;
            if(commingData){
               
                // resolve("success")
               exObj.push(data)
               resolve(exObj)
                // console.log(exObj)
            }else{
                reject("not inserted")
            }
        },4000)
    })
}
addData({id:104,name:"okay4"})
.then((result) => {
    console.log(result)
}).catch((err) => {
    
});