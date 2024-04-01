const DataHandler=async ()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(res)
    let data= await res.json();
    console.log(data)
}
DataHandler();
//This function is used to handle the data from the API, it uses async and await to ensure that the data is fully loaded before proceeding.