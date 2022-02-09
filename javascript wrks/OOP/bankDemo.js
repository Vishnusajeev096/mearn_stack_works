//bank 
//createAccount(),
//withdraw(),deposit(),balanceEnquiry()


class Bank{
    createAccount(acno,bname,pan,branch,phone,bal){
    this.accountNumber=acno
    this.personName=bname
    this.pan=pan
    this.branch=branch
    this.phone=phone
    this.bal=bal
    }
    withdraw(amount){
        if(amount>this.bal){
            console.log(`transaction failed insufficient balance on ur account ${this.accountNumber}`);
        }
        else{
            this.bal-=amount
            console.log(`your account ${this.accountNumber} has been debited with amount ${amount} your available balance ${this.bal}`);
        }
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`your account ${this.accountNumber} has been credited with amount ${amount} your available balance ${this.bal}`);
    }
    balanceEnquiry(){
        console.log(`your available balance=${this.bal}`);
    }
}

var bank=new Bank()
bank.createAccount(11,"arjun",1233,"Kakkanad",75675,2500)

bank.deposit(3000)
bank.balanceEnquiry()