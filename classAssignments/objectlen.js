// In javascript, we have Object.keys() property, which checks whether there are any properties or not. 
// If we use the length property with Object.keys() then the number of properties will be displayed which is nothing but the length of the object. 
let a={
    id:101,
    name:"siva"
}
let b=Object.keys(a).length;
if(b==0){
    console.log("Object length is Empty");
}
else{
    console.log("Object length is:"+b);
}