//Armstrong number
let a=548834;
let b=a,count=0;
let rem;
let sum=0;
let c=a;
while(a!=0){
    count++;
    a=Math.floor(a/10);
}
//console.log(count);

while(b!=0){
    let res=1;
    rem=b%10;
    for(let i=0;i<count;i++){
        res=rem*res;
    }
    sum=sum+res;
    b=Math.floor(b/10);
}
//console.log(sum);
if(sum==c){
    console.log("Armstrong Number");
}
else{
    console.log("Not Armstrong Number");
}