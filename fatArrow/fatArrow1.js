//difference between normal function and fat-Array function .(With single line syntax).



/*function add(a,b){
    console.log(a+b);
}
add(20,20)*/

// Shot way to define a function  using fat-Array syntax
//    =>  arrow represent function.

/*let add=(a,b)=>{
    console.log(a+b);
}
add(20,20)*/

//if you have one arugament you can write a function in one line  using fat-Array function.

let add=name=>"my name is "+name
console.log(add("siva"));

