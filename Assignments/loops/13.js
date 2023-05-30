let a=1;
let i=a;
while(a<=5){
    console.log(a);
    if(a==5){
        console.log("Even numbers are:");
       
        while(i<=5){
  
            if(i%2==0){
                console.log(i);
            }
            i++;
        }
      
    }
    a++;
}
