// let a = {
//     id: 1,
//     name: "siva",
//     values: "[1,2,3,4,5,6,7,8,9]",
//   };
  
//   for (let key of Object.keys(a)) {
//     console.log(a[key]);
//   }
  //----------------------------------------------------------

  let a = {
    id: 1,
    name: "siva",
    values: "[1,2,3,4,5,6,7,8,9]",
  };
  
  for (let key of Object.keys(a)) {
    if(key == 'values'){
        console.log(a[key]);
        let z=a[key];

        let y=JSON.parse(z);

        for(let i=0;i< y.length;i++){
            console.log(y[i]);
        }
    }
  }
  

