//Inhertance means reusing existing class functionality and adding new functionality.

//if subclass extands superclass And  if that subclass consist of constructor  .you must have to call super class constrouctor also. Else you get error.
// Even if there is no constructor in super class but you have constructor in child class you have to call superclass constructor. default one is called from super.

//**** if you have constructor in childclass than must you have to call parentclass constructor also. that dosen't matter constructor is avaliable or not in parentclass.(if constructor not avilable in parentclass default one is called.)
// if there is no constructor in child class .Than no need to call superclass constructor.

class vehical{
    speed;
    wheels;
    constructor(speed,wheels){
        this.speed=speed;
        this.wheels=wheels;
    }

    run(){
        console.log(`vehical running with speed ${this.speed} And it has ${this.wheels} wheels`);
    }
}
class car extends vehical{
    constructor(carspeed,carwheels){
        super(carspeed,carwheels)
    }

    work(){
        console.log("car running succesfully");
    }


}

let obj=new car("80km",4);
obj.run();
obj.work();