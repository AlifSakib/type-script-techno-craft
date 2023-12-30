// Author : AlifSakib
// Desc: Generic With Interface

// Generic With Interface

// Example

interface GenericInterface<T> {
    value : T;
    add : (a : T, b : T) => T;
}

const genericInterface : GenericInterface<number> = {
    value : 21,
    add : (a, b) => a + b
}


// Example

interface GenericInterface2<T, U> {
    value : T;
    add : (a : T, b : U) => U;
}

const genericInterface2 : GenericInterface2<number, string> = {
    value : 21,
    add : (a, b) => b
}

genericInterface2.add(21, "Alif"); // "Alif"