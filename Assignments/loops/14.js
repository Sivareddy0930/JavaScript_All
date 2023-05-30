//Fabonacci series
//using while loop
/*let a=0,b=1,c,count=10,i=2;
console.log(a);
console.log(b);
while(i<count){
    a=a+b;
    console.log(a);
    c=a;
    a=b;
    b=c;
    i++;
}*/
//-----------------------------------------------
//Using for loop

/*let a=0,b=1,c;
console.log(a);
console.log(b);
for(let i=2;i<10;i++){
    a=a+b;
    console.log(a);
    c=a;
    a=b;
    b=c;
}*/
//---------------------------------------------------
//using for loop another approch
let a=0,b=1,c;
console.log(a);
console.log(b);
for(let i=2;i<10;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}