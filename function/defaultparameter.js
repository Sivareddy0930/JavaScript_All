//a parameter has a default value of undefined. It means that if you don’t pass the arguments into the function, its parameters will have the default values of undefined.
function run(message){
    console.log("default value of the message parameter is "+message +".because we not passing an arugment to it message parameter");
}
run()
//------------------------------------------------------------------------------------------------------------
// declaration of default parameter.

function dp(message="Hi"){ //default parameter is message="hi"
    console.log(message);
}
dp();//Hi
dp(undefined);//Hi
dp("Hello")//Hello