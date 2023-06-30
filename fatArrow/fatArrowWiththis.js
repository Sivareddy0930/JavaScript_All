// This keyword is used to represent current object.
//if we use this keyword with fat-Arrow function we get empty like { }
let fatArray=()=>{
    console.log(this);
}
fatArray()