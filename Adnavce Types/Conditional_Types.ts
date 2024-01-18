//  Conditional Types

// Meaning: A type that depends on another type

// Example

type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true

type B = IsString<number>; // false

// Example

type IsNumber<T> = T extends number ? true : false;

type C = IsNumber<string>; // false

type D = IsNumber<number>; // true

// Example

type IsArray<T> = T extends Array<any> ? true : false;

type E = IsArray<string>; // false

type F = IsArray<number>; // false

type G = IsArray<Array<string>>; // true

// Example

type a1 = string

type a2 = a1 extends string ? string : null

type Person10 = {

    name: string;

    age: number;

    country: string;
}

type CheckPerson<T,K> = K extends keyof Person10 ? true : false;

type h = CheckPerson<Person10, "name">; // true