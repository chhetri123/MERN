/*----------------------------------------------------------------
// Function prototypes
Before ES6 
How it is written
*
*
*
*----------------------------------------------------------------*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Rocky");
dog.speak();

/*----------------------------------------------------------------
// Class Based After Introduction Of 'Class'
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

const dog1 = new Animal("Rocky");
dog1.speak();
