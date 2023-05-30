//sort in ascending order
let a=10,b=-4,c=-6;
if(a<=b && a<=c){
    if(b<=c){
        console.log(a,b,c);
    }
    else{
        console.log(a,c,b);
    }

}
else if(b<=a && b<=c){
    if(a<=c){
        console.log(b,a,c);
    }
    else{
        console.log(b,c,a);
    }
}
else{
    if(a<=b){
        console.log(c,a,b);
    }
    else{
        console.log(c,b,a);
    }
}

// let a=0,b=10,c=5,temp;
// if(b<a){
//     temp=a;
//     a=b;
//     b=temp;
// }
// if(c<b){
//     temp=b;
//     b=c;
//     c=temp;
// }
// if(b<a){
//     temp=a;
//     a=b;
//     b=temp; 
// }
// console.log(a,b,c);
