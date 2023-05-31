class Account{        //class is created 
    balance=500;
    open_Account(){
        console.log("account created");
    }   
}
let a1=new Account();//Object is created
console.log(a1.balance);
a1.open_Account(); 