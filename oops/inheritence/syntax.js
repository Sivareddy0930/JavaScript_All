class parent{
      a=100;
}
class child extends parent {
    run(){
        console.log("child method");
    }

}
let obj=new child();
console.log(obj.a);
obj.run();