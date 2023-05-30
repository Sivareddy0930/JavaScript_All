// If a code block is inside a function, then var becomes a function-level variable.
function add(){
    if(true){
        var i=10;
    }
    console.log(i);// accessing function level only.
}
add();
//console.log(i);//error
//we cannot access outside function.