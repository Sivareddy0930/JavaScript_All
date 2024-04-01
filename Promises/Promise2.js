function getData() {
     
      return  fetch('https://dummyjson.com/products')
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json();
                } else {

                    let err=new Error("No response data");
                    return Promise.reject(err);
                }
            })
        }
// console.log(getData()) 

let printData = (data) => {
    let rows = "";
    data.forEach(element => {
        rows += `<tr>
         <td>${element.id}</td>
         <td>${element.title}</td>
         <td>${element.price}</td>
         </tr>`;
    });
    document.getElementById('abc').innerHTML = rows;
};

getData()
    .then(data => {
       if(data && data.products){
        return data.products;
       }
       else{
        return Promise.reject(new Error("No products found in the JSON file"));
       }
    })
    .then(ArrayData => {
        printData(ArrayData); // Call the printData function
    })
    .catch(err => {
        console.log(err.message);
    });
