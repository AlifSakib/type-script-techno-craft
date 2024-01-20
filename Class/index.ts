// Author : Alifsakib

class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
