document.addEventListener('DOMContentLoaded',function(){
    //setIntervel

    let m=document.querySelector('#TimeNow');
    let m2=document.querySelector('#okay');

    let Time=()=>{
        setInterval(()=>{
            let time=new Date();
            m.innerHTML=time.toLocaleTimeString();
        },1000)
    }

    m2.addEventListener('click',Time)





});