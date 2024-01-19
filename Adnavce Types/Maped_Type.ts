//  Maped Type 

type Area = {
    length: number;
    breadth: number;
}

type AD = Area["length"] // lookup type
type BD = keyof Area // union type // "length" | "breadth"

type MapedType<T> = {
    [P in keyof T]: T[P]
}

type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly = {
    readonly length: number;
    readonly breadth: number;
}

const RectangleArea : AreaReadOnly = {
    length: 10,
    breadth: 20
}

RectangleArea.length = 30; // Error

type TestArea = {
    length: number;
    breadth: number;
    height: number;
    width: number;
}

type TA<T> = {
    [key in keyof T]: T[key]
}

const area1 : TA<{name : string, age: number}> = {
    name: "Alif",
    age: 21
}