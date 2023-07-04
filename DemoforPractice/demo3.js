let a= new class{
    constructor(name){
        this.name=name;
    }
    detail(){
        console.log(`my details are ${this.name}`);
    }
}("Siva");
a.detail();