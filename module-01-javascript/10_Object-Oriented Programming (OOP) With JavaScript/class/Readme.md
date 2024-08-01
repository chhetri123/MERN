## 10.1. What is Object-Oriented Programming?

### Definition

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which are instances of classes. These objects can contain both data (attributes) and methods (functions) that operate on the data.

### Key Concepts

- **Encapsulation**: Bundling of data with methods that operate on that data.
- **Inheritance**: Mechanism to create new classes based on existing classes.
- **Polymorphism**: Ability to call the same method on different objects, each responding in its own way.
- **Abstraction**: Hiding complex implementation details and showing only the necessary features of an object.

---

### Why is OOP Needed?

Imagine you're building with Lego bricks. Each brick is like a small, pre-built object. You can build some things with these bricks, but if you want to create a complex structure like a castle, it would be much easier if you had sets of specialized bricks that can be reused and connected in various ways.

OOP is like having a set of specialized Lego kits. Instead of building everything from scratch with simple bricks, you create reusable kits (classes) that can be assembled into complex structures (objects). This makes it easier to build, manage, and expand your creations.

#### Key Reasons with Simple Examples:

1. **Reusability**:

   - **Why**: Imagine you have a robot toy. Instead of building a new robot from scratch every time, you can create a base robot design and reuse it to build different types of robots.
   - **Example**:

     ```javascript
     // Base robot design
     class Robot {
       constructor(name) {
         this.name = name;
       }
       greet() {
         console.log(`Hello, I am ${this.name}`);
       }
     }

     // Reusing base design for different robots
     class CleaningRobot extends Robot {
       clean() {
         console.log(`${this.name} is cleaning`);
       }
     }

     class CookingRobot extends Robot {
       cook() {
         console.log(`${this.name} is cooking`);
       }
     }

     const robby = new CleaningRobot("Robby");
     robby.greet(); // Hello, I am Robby
     robby.clean(); // Robby is cleaning

     const chefBot = new CookingRobot("ChefBot");
     chefBot.greet(); // Hello, I am ChefBot
     chefBot.cook(); // ChefBot is cooking
     ```

2. **Scalability**:

   - **Why**: Think of a small toy train set. It's easy to manage. But if you want to build a huge train network, you need a plan to connect all tracks and trains efficiently.
   - **Example**:

     ```javascript
     // Basic class for all vehicles
     class Vehicle {
       constructor(name) {
         this.name = name;
       }
       move() {
         console.log(`${this.name} is moving`);
       }
     }

     // Specific types of vehicles
     class Car extends Vehicle {
       honk() {
         console.log(`${this.name} is honking`);
       }
     }

     class Bike extends Vehicle {
       ringBell() {
         console.log(`${this.name} is ringing the bell`);
       }
     }

     const myCar = new Car("MyCar");
     myCar.move(); // MyCar is moving
     myCar.honk(); // MyCar is honking

     const myBike = new Bike("MyBike");
     myBike.move(); // MyBike is moving
     myBike.ringBell(); // MyBike is ringing the bell
     ```

3. **Maintenance**:

   - **Why**: Imagine if every time you wanted to fix a toy, you had to open up each individual part and fix it separately. With OOP, you can fix the design (class) and all toys (objects) built from it are automatically fixed.
   - **Example**:

     ```javascript
     // Base class for appliances
     class Appliance {
       constructor(name) {
         this.name = name;
       }
       turnOn() {
         console.log(`${this.name} is now on`);
       }
     }

     // Specific appliance
     class WashingMachine extends Appliance {
       wash() {
         console.log(`${this.name} is washing clothes`);
       }
     }

     // Fixing the design
     Appliance.prototype.turnOff = function () {
       console.log(`${this.name} is now off`);
     };

     const washer = new WashingMachine("Washer 3000");
     washer.turnOn(); // Washer 3000 is now on
     washer.wash(); // Washer 3000 is washing clothes
     washer.turnOff(); // Washer 3000 is now off
     ```

4. **Organization**:

   - **Why**: Just like organizing your toy box makes it easier to find and play with your toys, organizing your code with OOP makes it easier to manage and understand.
   - **Example**:

     ```javascript
     // Class for a person
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
       introduce() {
         console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
       }
     }

     // Creating multiple people
     const john = new Person("John", 30);
     const jane = new Person("Jane", 25);

     john.introduce(); // Hi, I am John and I am 30 years old.
     jane.introduce(); // Hi, I am Jane and I am 25 years old.
     ```

## 10.2. OOP in JavaScript

### Overview

JavaScript supports OOP through prototype-based inheritance, which is different from class-based OOP found in languages like Java or C++. However, ES6 introduced class syntax which makes OOP in JavaScript more intuitive.

### Key Features

- **Prototypes**: Objects can inherit properties and methods from other objects.
- **Classes**: ES6 introduced classes, which provide a clearer syntax for creating objects and dealing with inheritance.

---

## 10.3. Constructor Functions and the `new` Operator

### Constructor Functions

A constructor function is a special type of function used to create and initialize objects.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);
console.log(john.name); // John
```

### `new` Operator

The `new` operator creates an instance of an object that has a constructor function.

- **What It Does**:
  1. Creates a new empty object.
  2. Sets `this` to point to the new object.
  3. Executes the constructor function with `this` bound to the new object.
  4. Returns `this` (the new object).

---

## 10.4. Prototypes

### Overview

Every JavaScript object has a prototype property that is a reference to another object. This allows for inheritance and method sharing.

### Example

```javascript
// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};
```

### Prototype Chain

When accessing a property or method, JavaScript first looks at the object itself, then at the prototype, and so on up the prototype chain.

---

## 10.5. Prototypal Inheritance and The Prototype Chain

### Prototypal Inheritance

JavaScript objects inherit properties from other objects directly, rather than from classes.

### Example

```javascript
const animal = {
  speak: function () {
    console.log("Animal speaks");
  },
};

const dog = Object.create(animal);
dog.speak(); // Animal speaks
```

### Prototype Chain

The prototype chain is a series of links between objects. If an object does not have a property, JavaScript looks for it up the chain.

---

## 10.6. Prototypal Inheritance on Built-In Objects

### Example with Built-In Objects

```javascript
const array = [1, 2, 3];
Array.prototype.customMethod = function () {
  return this.length;
};

console.log(array.customMethod()); // 3
```

### Caution

Modifying built-in prototypes can lead to issues, especially if libraries or other code relies on those built-ins.

---

## 10.7. ES6 Classes

### Overview

ES6 introduced a new syntax for defining classes, making it easier to create objects and handle inheritance.

### Example

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // Hello, my name is Alice.
```

---

## 10.8. Setters and Getters

### Overview

Setters and getters allow you to define methods that act as properties. They are used to set or get the values of private fields.

### Example

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const bob = new Person("Bob");
console.log(bob.name); // Bob
bob.name = "Robert";
console.log(bob.name); // Robert
```

---

## 10.9. Static Methods

### Overview

Static methods belong to the class itself rather than instances of the class.

### Example

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // 8
```

---

## 10.10. `Object.create`

### Overview

`Object.create` creates a new object with the specified prototype object and properties.

### Example

```javascript
const animal = {
  speak() {
    console.log("Animal speaks");
  },
};

const cat = Object.create(animal);
cat.speak(); // Animal speaks
```

### Usage

- Useful for creating an object with a specific prototype.
- Can also define additional properties.

---

## 10.11. Inheritance Between "Classes": Constructor Functions

### Example

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks.`);
};

const myDog = new Dog("Rex");
myDog.speak(); // Rex makes a noise.
myDog.bark(); // Rex barks.
```

---

## 10.12. Inheritance Between "Classes": ES6 Classes

### Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Rex");
myDog.speak(); // Rex makes a noise.
myDog.bark(); // Rex barks.
```

---

## 10.13. Encapsulation: Protected Properties and Methods

### Overview

Encapsulation involves protecting an object's internal state from outside interference. JavaScript does not have built-in access control but can be simulated using closures.

### Example

```javascript
function Person(name) {
  let age = 30; // Protected property

  this.name = name;

  this.getAge = function () {
    return age;
  };

  this.setAge = function (newAge) {
    if (newAge > 0) {
      age = newAge;
    }
  };
}

const person = new Person("John");
console.log(person.getAge()); // 30
person.setAge(35);
console.log(person.getAge()); // 35
```

---

## 10.14. Encapsulation: Private Class Fields and Methods

### Overview

ES2022 introduced private fields and methods in classes, allowing true encapsulation.

### Example

```javascript
class Person {
  #age; // Private field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  #calculateYearOfBirth() {
    return new Date().getFullYear() - this.#age;
  }

  getAge() {
    return this.#age;
  }

  getYearOfBirth() {
    return this.#calculateYearOfBirth();
  }
}

const person = new Person("John", 30);
console.log(person.getAge()); // 30
console.log(person.getYearOfBirth()); // e.g., 1994
```

---

## 10.15. Chaining Methods

### Overview

Method chaining allows multiple methods to be called on the same object in a single statement.

### Example

```javascript
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  getValue() {
    return this.value;
  }
}

const result = new Calculator().add(5).subtract(2).multiply(10).getValue();

console.log(result); // 30
```
