//object are key value pair in curly braces.

let obj={
    id:101,
    name:"siva",
    salary:60000,
    languagesknow:["Telugu","Hindi","English"],
    location:{
        address:"ReddySagar,Ongole,Ap",
        pincode:523264,
    },

    company:function (){
        console.log("greetlabs");
    },
   

};
console.log(obj.id);
console.log(obj["id"]);//Another way to aquare object.
console.log(obj['salary'])
console.log(obj.location.pincode);
console.log(obj.languagesknow[0]);
obj.company();

