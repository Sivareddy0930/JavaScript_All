function x(){
    var v=10;

    function y(){
        console.log(v)
    }

    return y;
}

var a= x();
console.log(a);

a();