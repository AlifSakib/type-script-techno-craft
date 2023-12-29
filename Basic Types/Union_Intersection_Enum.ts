// Author : AlifSakib
// Desc: Union and Intersection Types in TypeScript

// Union Types

type  StringOrNumber = string | number;

let unionType : StringOrNumber = 10;

unionType = "Alif";

// unionType = true; // Error

// enum  Grades  {
//     first =  "firsr",
//     second =  "second",
//     third  =  "third",
    
// };

type Student = {
    name : string,
    id : number
    institution : string
    grade : "A" | "B" | "C" | "D" | "F"
}

type Employee = {
    name : string,
    id : number
    company : string
}

type StudentOrEmployee = Student | Employee;

let student : StudentOrEmployee = {
    name : "Alif",
    id : 123,
    institution : "DIU",
    grade : "A"

}

let employeee : StudentOrEmployee = {
    name : "Alif",
    id : 123,
    company : "ISC"
}

// Intersection Types

type Person6 = {
    name : string,
    balance : number,
    addBalance : (amount : number) => void
}

type Account = {
    accountNumber : number,
    accountType : string
}

type PersonAccount = Person6 & Account;

let personAccount : PersonAccount = {
    name : "Alif",
    balance : 1000,
    addBalance(amount : number) {
        this.balance += amount;
    },
    accountNumber : 123456,
    accountType : "Savings"
}


