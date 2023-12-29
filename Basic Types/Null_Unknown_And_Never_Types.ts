// Author : AlifSakib
// Desc: Null, Unknown and Never Types

// Null Type
let nullType : null = null;

// nullType = 10; // Error

const searchvalue = (name : string | null) : string | null => {
    if(name === "Alif") {
        return name;
    }
    return null;
}

// Unknown Type

let unknownType : unknown = "Alif"; // unknownType can be any type

// unknownType = 10;
// unknownType = true;

// unknownType.toUpperCase(); // Error because unknownType can be any type

// Type Assertion

(unknownType as string).toUpperCase();

// Never Type

const throwError = (message : string) : never => {
    throw new Error(message);
}

const keepProcessing = () : never => {
    while(true) {
        console.log("I always does something and never ends.");
    } // This function never ends

}

// let neverType : never = 10; // Error
// let neverType2 : never = null; // Error
// let neverType3 : never = undefined; // Error
// let neverType4 : never = "Alif"; // Error
// let neverType5 : never = true; // Error

const person6 = {
    name : "Alif",
    balance : 1000,
    addBalance(amount : number) {
        this.balance += amount;
    }
}

let person6Data = person6?.name ?? "Unknown"; // person6Data = "Alif"

// Optional Chaining

let person6Data2 = person6?.name ?? "Unknown"; // person6Data = "Alif"

// person6 = null; // Error

// person6Data = person6.name ?? "Unknown"; // Error because person6 is null
