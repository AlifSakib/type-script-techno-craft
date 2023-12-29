// Author: AlifSakib
// Desc: Array and Tuples in Typescript

// Arrays : collection of same type of data
const names : string[] = ['John', 'Doe'];
const ages : number[] = [20, 30];
const mixed : (string | number | boolean)[] = ['John', 20, true];
const mixed2 : any[] = ['John', 20, true];

// Tuples : fixed length array
const person : [string, number, boolean] = ['John', 20, true];
const employee : [string, number, boolean][] = [
    ['John', 20, true],
    ['Jane', 25, false]
];

const employee2 : [string, number, boolean][] = [
    ["json", 20, true],
    ["Jane", 25, false],
    ["Doe", 30, true]
]