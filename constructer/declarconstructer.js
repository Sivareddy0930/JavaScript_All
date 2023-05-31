//constructer 
//it is used to initilize object values.
class Run{
    model=0;
    speed=0;
    constructor(model,speed){
        this.model=model;
        this.speed=speed;

    }
}
let a1=new Run(1,400);
console.log(a1.model);
console.log(a1.speed);
