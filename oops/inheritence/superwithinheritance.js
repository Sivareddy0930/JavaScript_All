class Account {
    acc_no;
    Name;
    location;
    constructor(acc_no,Name,location){
        this.acc_no=acc_no;
        this.Name= Name;
        this.location=location;
    }

}
class savingAccount extends Account{
    min_bal=500;
    acc_bal=0;
    constructor(acc_no,Name,location,acc_bal){                   
        super(acc_no,Name,location);                                     
        this.acc_bal=acc_bal;   

    }
                                                                            


}
let s1=new savingAccount(100,"siva","darsi",4000);//object initializing using constructor.
console.log(s1);

//Here i am trying to initalize object using constructor .at same time i like to initilize my parent properties as well .
//so by using super() we can pass  arugments to properties via parent constructor


