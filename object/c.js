let emp={
    name:"siva",
    id:101,
    salary:80000,
    company:"Infosys",
    location:"Hydrabad",
}

function aboutemp({name}){
    return name;

}
console.log(aboutemp(emp));