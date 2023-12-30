// Author : AlifSakib
// Desc : Constraints Using Key


// Constraints Using Key

// Example

interface Person {
    name: string;
    age: number;
    country: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const person: Person = {
    name: "Alif",
    age: 21,
    country: "BD"
}

getProperty(person, "name"); // "Alif"

// getProperty(person, "age"); // 21

// getProperty(person, "country"); // "BD"


// Example

type NewType = "name" | "age" | "country";

type newTypeUsingKeyOf = keyof Person; // "name" | "age" | "country"

const a : NewType = "name";
const b : newTypeUsingKeyOf = "country";


