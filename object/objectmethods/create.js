//object.create method is used to create new object by useing existing object.
//new object inherate all the properties of existing object.

let vehicle={
    wheels:4,
    engine:()=>{ return "Sounds like Vhooomm!"}
}
console.log(vehicle.engine());



let car=Object.create(vehicle);
car.door=4;
console.log(car);//it not copy the vehicle object properties but it inherit.
console.log(car.wheels);//here we are inherting.


let tata=Object.create(car);
console.log(tata.engine());

tata.engine= ()=>{return "Royee Royee!"};//overriding the function that present in vehicle object.
console.log(tata.engine());
