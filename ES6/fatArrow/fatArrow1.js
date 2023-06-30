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

//if you have one parameter you can write a function in one line  using fat-Array function.
// if you have only one parameter you don't need to use paranthisis also.

let add=name=>"my name is "+name
console.log(add("siva"));

