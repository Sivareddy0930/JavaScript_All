class parent{
    m1(){
        console.log("parent method1");
    }
    m2(){
        console.log("parent method2");
    }
}

class child extends parent {
    m3(){
        console.log("child method");
    }
}
let obj=new child();
obj.m1();
obj.m2();
obj.m3();
