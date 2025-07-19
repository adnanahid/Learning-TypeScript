// access modifier
class BankAccount {
    readonly id:number;
    name:string;
    protected _balance: number;

    constructor(id:number, name:string,  balance:number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // addDeposit(amount:number) {
    //     this.balance += amount;
    // }
    //
    // getBalance() {
    //     return this.balance;
    // }

    set deposit(amount: number) {
        this._balance += amount;
    }

    get balance() { return this._balance; }
}

const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
// goribManusherAccount.addDeposit(20);
// console.log(goribManusherAccount);
// console.log(goribManusherAccount.getBalance());

// class studentAccount extends BankAccount {
//     test(){
//         this.balance
//     }
// }

goribManusherAccount.deposit = 10;
console.log(goribManusherAccount);
