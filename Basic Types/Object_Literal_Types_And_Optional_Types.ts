// Author : AlifSakib
// Desc: Object Literal Types and Optional Types

// Object Literal Types
const person1 : {
    name : string,
    age : number,
    isEmployed : boolean
} = {
    name: "John",
    age: 20,
    isEmployed: true
}

// Optional Types
const person2 : {
    name : string,
    age : number,
    isEmployed? : boolean // ? means optional
} = {
    name: "John",
    age: 20
}

const person3 : {
    readonly name : string, // Means name cannot be changed
    age : number,
    isEmployed? : boolean // ? means optional
} = {
    name: "John",
    age: 20
}

// person3.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
// person3.age = 25; // No Error because age is not readonly