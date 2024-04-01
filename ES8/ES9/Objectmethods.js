let obj1={
    name:"okay",
    salary:100000,
    dept:"IT",
    location:"bengaluru"
}

const obj1Entries=Object.entries(obj1);
console.log(obj1Entries)

//it conver entries of array to normal object
console.log(Object.fromEntries(obj1Entries))