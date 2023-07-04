let f=(aclass)=>{
    return new aclass();
}
let a=f(class{
 b=100;
met1(){
    console.log(`Value of the class is ${this.b}`);
}});

a.met1();