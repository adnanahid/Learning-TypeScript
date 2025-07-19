// access modifier
class BankAccount {
    readonly id:number;
    name:string;
    protected balance: number;

    constructor(id:number, name:string,  balance:number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    addDeposit(amount:number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }

}

const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
goribManusherAccount.addDeposit(20);
console.log(goribManusherAccount);
console.log(goribManusherAccount.getBalance());


class studentAccount extends BankAccount {
    test(){
        this.balance
    }
}