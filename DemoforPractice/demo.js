class a{
    static s1=10;

    // constructor(v1,v2){
    //     this.value1=v1
    //     this.value2=v2
    // }
    // value(){
    //     return this.value1+this.value2;
    // }
    r1(){
        console.log("parent class "+a.s1);

    }

}
class b extends a {
    constructor(v1,v2){
        super(v1,v2)
    }
    r2(){
        console.log("child class "+b.s1);
    }
}
let obj=new b(10,10);
// let res=obj.value();
// console.log(res);
obj.r1()
obj.r2()