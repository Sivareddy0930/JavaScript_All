let Emp={
    id:1,
    Name:"siva",
    salary:60000,
    location:{
                address:"Reddysagar,Ongole,AP",
                pincode:523264,

             }
};
//object destructuring in nested object.

// let{id,Name,address}=Emp;
let{id,Name,location:{address,pincode}}=Emp;//here consider the location object as an propertie.

console.log(id);
console.log(Name);
console.log(address);