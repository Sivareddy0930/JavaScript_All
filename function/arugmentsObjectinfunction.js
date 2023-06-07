//Inside a function, you can access an object called arguments that represents the named arguments of the function.

//The arguments object behaves like an array though it is not an instance of the Array type.

function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
console.log(sum);

}
add(1,2,3,4,5,6,7,8,9);