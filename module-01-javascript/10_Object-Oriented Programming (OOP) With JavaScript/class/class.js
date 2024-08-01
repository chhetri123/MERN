class Sum {
  #a = 0;
  #b = 0;
  constructor(num1, num2) {
    this.#a = num1;
    this.#b = num2;
  }
  get() {
    return this.#addNumber();
  }
  set(a, b) {
    this.#a = a;
    this.#b = b;
  }
  static test() {
    console.log("Static property test");
  }
  #addNumber() {
    console.log(Sum.test());
    return this.#a + this.#b;
  }
}

const addTwoNumber = new Sum(2, 3);
console.log(addTwoNumber.get());

addTwoNumber.set(3, 4);
console.log(addTwoNumber.get());
Sum.test();

//

/*----------------------------------------------------------------
// Arithematic Operation 
*
*
*
*----------------------------------------------------------------*/
class Arithmetic {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

const operation = new Arithmetic(6, 3);
console.log("Add:", operation.add());
console.log("Subtract:", operation.subtract());
console.log("Multiply:", operation.multiply());
console.log("Divide:", operation.divide());

/*----------------------------------------------------------------
// Inheritance 
*
*
*
*----------------------------------------------------------------*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}
/*
When the same method is implemented in both the parent and child classes,
creating an instance of the child class overrides ( replace)
 the method from the parent class.
*/

const d = new Dog("Rocky");
d.speak();

/*----------------------------------------------------------------
// Encapsulation 
*
*
----------------------------------------------------------------*/

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name, age);
  }
  getNewName() {
    console.log("Name from child: " + this.name);
  }
}

const person = new Child("John", 30);
person.getDetails();
person.getNewName();
