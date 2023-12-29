// Autor : Alif Sakib
// des : Interface vs Type

// Interface

interface Person {
    name : string;
    age : number;
    greet(phrase : string) : void;
}

let user1 : Person;

interface Student extends Person {
    roll : number;

}

let student1 : Student;

// Type

type Person2 = {
    name : string;
    age : number;
    greet(phrase : string) : void;
}

let user2 : Person2;

// Type can be used with union, intersection, tuple, etc. but interface can't 

// Example

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable &  Numeric; // Universal = number why ? because number is common in both Combinable and Numeric

let universal : Universal;

// Example

type Admin = {
    name : string;
    privileges : string[];
}

type Employee = {
    name : string;
    startDate : Date;
}

type ElevatedEmployee = Admin & Employee;

const e1 : ElevatedEmployee = {
    name : "Alif",
    privileges : ["create-server"],
    startDate : new Date()
}

// Example Interface

interface Admin2 {
    name : string;
    privileges : string[];
}

interface Employee2 {
    name : string;
    startDate : Date;
}

interface ElevatedEmployee2 extends Admin2, Employee2 {

}

const e2 : ElevatedEmployee2 = {
    name : "Alif",
    privileges : ["create-server"],
    startDate : new Date()
}

// Interface can be used with class but type can't

// Example

class Car {

}

let car : Car;

// Example

interface Driveable {
    drive() : void;
}

class Car2 implements Driveable {
    drive() : void {
        console.log("Driving...");
    }
}

// define type with interface in array

interface IRoll {
    [index : number] : number | string;
}

let roll : IRoll;
roll = [1, 2, 3, 4, 5, "6"];
// define type with type in array

type IRoll2 = number[];

// use inretface in object and class 
// use type in function