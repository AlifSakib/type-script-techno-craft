// Author : AlifSakib
// Desc: Type Alias and Optional Types

type Person5 = {
    name : string,
    balance : number,
    addBalance : (amount : number) => void
}

let person5 : Person5 = {
    name : "Alif",
    balance : 1000,
    addBalance(amount : number) {
        this.balance += amount;
    }
}

type calculation = (x : number, y : number) => number;

const calculateTax = (num1 : number, num2 : number, calculate: calculation ) : number => {
    return calculate(num1, num2) * 0.1;
}

