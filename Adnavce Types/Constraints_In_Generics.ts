// Author : AlifSakib
// Desc : Constraints In Generics

// Constraints In Generics

// Example

interface Lengthwise {
    length: number;

}

function genericFunction<T extends Lengthwise>(argument: T): T {
    console.log(argument.length);
    return argument;
}

genericFunction("Alif"); // 4
genericFunction([1, 2, 3]); // 3
genericFunction({ length: 21 }); // 21
genericFunction(21); // Error : Argument of type 'number' is not assignable to parameter of type 'Lengthwise'. 
//Type 'number' is not assignable to type 'Lengthwise'. Property 'length' is missing in type 'number' but required in type 'Lengthwise'.
