let obj={
    id:101,
    name:"siva",
    location:{
        houseno:"7-270",
        pincode:523264
    }
}

let {id=102,...values}=obj;
console.log(id)
console.log(values)
