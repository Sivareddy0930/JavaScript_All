addEventListener("DOMContentLoaded",()=>{
    let outer = ()=>{
        alert("Outer Div called")

        // event.stopPropagation();
        // by using this we can stop propagations.
        
    }
    let inner = ()=>{
        alert("Inner Div called")
    }

    let out = document.getElementById("outerDiv");
    // out.addEventListener("click",outer);
    //by default bubbling 
    out.addEventListener("click",outer,true);
    //by setting true capturing will happen

    let inn = document.getElementById("innerDiv");
    // inn.addEventListener("click",inner);
    //by default bubbling 
    inn.addEventListener("click",inner,true);
    //by setting true capturing will happen
  
}


)