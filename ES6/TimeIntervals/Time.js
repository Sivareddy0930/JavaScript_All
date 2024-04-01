document.addEventListener('DOMContentLoaded',function(){
    // setTimeOut
    let m1=document.querySelector('#setTime');
    let btn=document.querySelector('#show');

    let setName=()=>{
        setTimeout(()=>{m1.innerHTML="JAVA programming"},4000);
    }

    btn.addEventListener('click',setName)
// ================================================================================
    

});