//Here we are using constructor to initialize the properties.
//And accessing from method show().
//
class computer{
    
    constructor(brand,ram){
            this.BrandRoo=brand;
            this.Ram_Antarura_Babu=ram;

    }

    show(){
            
            console.log(this.BrandRoo);
            console.log(this.Ram_Antarura_Babu);

    }
}
let obj=new computer("Asus","8GB");
obj.show();