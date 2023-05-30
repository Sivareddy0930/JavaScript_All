let arr=["banana","apple","pinepapple","dragonfruit"]
function len_compare(a,b){
    return a.length-b.length;
}
arr.sort(len_compare)
console.log(arr);
