/*function add(a,b){
    console.log(a+b);
}
add(2)          //NaN
*/

function add(a,b,c=100){
    console.log(a+b+c);
}
add(2,4,2)//2+4+2=8
add(2,4)//2+4+100=106
add(2)//2+undefined+100=NaN
