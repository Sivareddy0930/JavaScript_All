let emp={
    name:"siva",
    id:101,
    salary:80000,
    company:"Infosys",
    location:"Hydrabad",
}




//Here we are object destructuring directly to  the function as an arugments .
// This is object destructuring  ===>  {name} in given function.


function aboutemp({name}){
    return name;

}
console.log(aboutemp(emp));