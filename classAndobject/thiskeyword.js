class Account{        //class is created 
    diposit_money=500;
    min_balance=0;

    open_Account(){
        console.log("account created");
    } 
    
    check_balance(){
        console.log(this.min_balance);//this is used to represent current class object .
        
        //we can use this inside class with variables/methods to represent  current class objects. 
    }
}
let a1=new Account();//Object is created
a1.open_Account(); 
a1.check_balance();
//outside class we use object reference (in this example a1 is object reference) to represent varables and methods in class.