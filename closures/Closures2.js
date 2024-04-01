function xx(){
    var b=100;
    function x(){
        var v=10;
    
        function y(){
            console.log(v +""+b)
        }
    
        return y;
    }
    
    var a= x();
    console.log(a);
    
    a();
}
xx();