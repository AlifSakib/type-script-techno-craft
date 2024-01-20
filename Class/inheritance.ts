class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Teacher extends Person {
  constructor(public name: string, public age: number, public subject: string) {
    super(name, age);
    this.subject = subject;
  }

  print() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`
    );
  }
}

const student = new Person("Alif", 21);
student.print();

const teacher = new Teacher("Alif", 21, "Math");
teacher.print();
