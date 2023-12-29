// Author : AlifSakib
// Desc: Functions in Typescript

// Normal Function or Named Function or Function Declaration
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Anonymous Function or Function Expression
const sub = function (num1: number, num2: number): number {
    return num1 - num2;
}

// Arrow Function or Fat Arrow Function
const mul = (num1: number, num2: number): number => {
    return num1 * num2;
}

// Arrow Function or Fat Arrow Function with implicit return
const div = (num1: number, num2: number): number => num1 / num2;

const person4 : {
    name : string,
    balance : number,
    addBalance : (amount : number) => void

}  = {
    name : "John",
    balance : 10000,
    addBalance (amount : number) {
        console.log(`New Balance: ${this.balance + amount}`) 
    }
}

// spread operator

const myFriends = ["John", "Jane", "Doe"];
const myNewFriends = ["Mike", "Doe", "Jane"];

const ourFriends = [...myFriends, ...myNewFriends];

// rest operator

const addNumbers = (...numbers : number[]) : number  => {
    return numbers.reduce((sum, current) => sum + current, 0);
}