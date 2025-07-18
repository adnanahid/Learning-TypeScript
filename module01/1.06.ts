//functions
//JavaScript there is 2 types function


// one is a normal function
function add(num1:number, num2:number):number {
    return num1 + num2;
}
add(1, 2);


//another one is Arrow function
const arrowAdd = (num1, num2) =>{
    return num1 + num2;
}
arrowAdd(1, 2);

const poorUser = {
    name: "adnan",
    balance: 1000,
    addBalance(balance: number): string{
        return this.balance + balance;
    }
}

console.log(poorUser.addBalance(7000));