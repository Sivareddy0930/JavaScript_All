class Emp{
    Empname;
    setName(name){
        this.Empname=name;
    }
    getName(){
        return this.Empname;
    }
}
const obj=new Emp();
obj.setName("siva");
console.log(obj.getName());
