// Author : AlifSakib
// Desc: Type Assertion

// Type Assertion
// Type Assertion is used to explicitly tell the compiler that a value is of a specific type.

// Type Assertion is done by using the as keyword.
// Type Assertion is also known as Type Casting.
// Type Assertion is used when we know the type of a value but the compiler doesn't know.

// Example 1
let unknownType1: unknown = "Alif"; // unknownType can be any type


type customError = {
    message: string
}

try {
    
} catch (error) {
    console.log((error as customError).message);
    
}