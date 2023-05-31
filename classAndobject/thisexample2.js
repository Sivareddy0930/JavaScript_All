class Account{        //class is created 
    min_balance=500;
    acc_bal=0;
    open_Account(){
        console.log("account created");
    }  
    deposit_Money(deposit){
        this.acc_bal=this.acc_bal+deposit;   
    } 
    get_balance(){
        console.log("Balance= "+this.acc_bal);
    }
}
let a1=new Account();//Object is created
a1.open_Account(); 
a1.deposit_Money(5000);
a1.get_balance();