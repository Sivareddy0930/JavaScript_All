const DataHandler=async ()=>{
    try{
        let res = await fetch("https://jsonplaceholder.")
    console.log(res)
    let data= await res.json();
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
DataHandler();
//This function is used to handle the data from the API, it uses async and await to ensure that the data is fully loaded before proceeding.