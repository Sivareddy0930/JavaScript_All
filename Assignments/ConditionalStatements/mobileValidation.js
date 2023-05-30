let number=9866123628;
//convert to string
let convstring=String(number);
let lenofnumber=convstring.length;
// we have string format number in convstring variable
let b=convstring.charAt(0);
let a=Number(b);
if(a==6||a==7||a==8||a==9){
    if(lenofnumber==10){
        console.log("valid number");
    }
    else{
        console.log("length must be 10");
    }
}
else{
    console.log("not valid");
}
