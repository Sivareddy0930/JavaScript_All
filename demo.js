let a=[1,2,3,4,1,2]
for(let i=0;i<a.length;i++){
    let count=0;
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            count++;
        }
    }
    
    if(count!=0){
       console.log(a[i]);
    }
}

