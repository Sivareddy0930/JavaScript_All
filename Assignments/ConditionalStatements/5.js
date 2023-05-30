let a=1234;
let count=0;
while(a != 0){
   count++;
   a=Math.floor(a/10) ;
}
console.log("no.of digits=",count);