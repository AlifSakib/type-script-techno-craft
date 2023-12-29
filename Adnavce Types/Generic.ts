// Author : AlifSakib
// Desc: Generic Types

// Generic Types
// Generic Types are types which can hold/ use several types

// Example

const names : Array<string> = []; // string[]
const names2 : string[] = []; // string[]
const names3 : Array<string | number> = []; // string[] | number[]
const names4 : (string | number)[] = []; // string[] | number[]
const names5 : Array<string | number | boolean> = []; // string[] | number[] | boolean[]
const names6 : (string | number | boolean)[] = []; // string[] | number[] | boolean[]
const names7 : Array<string | number | boolean | object> = []; // string[] | number[] | boolean[] | object[]
const names8 : (string | number | boolean | object)[] = []; // string[] | number[] | boolean[] | object[]
const names9 : Array<string | number | boolean | object | undefined> = []; // string[] | number[] | boolean[] | object[] | undefined[]
const names10 : (string | number | boolean | object | undefined)[] = []; // string[] | number[] | boolean[] | object[] | undefined[]
const names11 : Array<string | number | boolean | object | undefined | null> = []; // string[] | number[] | boolean[] | object[] | undefined[] | null[]
const names12 : (string | number | boolean | object | undefined | null)[] = []; // string[] | number[] | boolean[] | object[] | undefined[] | null[]

const promise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 2000);
});

const customObject : Array<{name : string, age : number}> = [{
    name : "Alif",
    age : 21
}];

type GenericArray<T> = T[];

const genericArray : GenericArray<string> = ["Alif", "Sakib"];
const genericArray2 : GenericArray<number> = [1, 2, 3, 4, 5];

type GenericArray2<T, U> = (T | U)[];

const genericArray3 : GenericArray2<string, number> = ["Alif", 21];
const genericArray4 : GenericArray2<number, string> = [21, "Alif"];

type GenericObject<T> = {
    [key : string] : T;
}

const genericObject : GenericObject<string> = {
    name : "Alif",
    age : "21"
}

const genericObject2 : GenericObject<number> = {
    name : 21,
    age : 21
}

type GenericTuple<T, U> = [T, U];

const genericTuple : GenericTuple<string, number> = ["Alif", 21];






