// A regular function that adds three numbers
function add(x, y, z) {
  return x + y + z;
}

// A curried version of the add function
function curriedAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Usage
const add5 = curriedAdd(5);
const add5and10 = add5(10);
const result = add5and10(15); // 30

console.log(result); // 30

//
// Curried function to calculate the volume of a rectangular prism
const volume = (length) => (width) => (height) => length * width * height;

// Usage
const volumeOfPrism = volume(2)(3)(4); // 24
console.log(volumeOfPrism); // 24

// Setting a fixed length
const length2Volume = volume(2);
const prismVolume = length2Volume(3)(4); // 24
console.log(prismVolume); // 24

//
// Partial Application

// A regular function that adds three numbers
function add(x, y, z) {
  return x + y + z;
}

// A partially applied version of the add function
function partialAdd(x, y) {
  return function (z) {
    return add(x, y, z);
  };
}

// Usage
const add5and10 = partialAdd(5, 10);
const result = add5and10(15); // 30

console.log(result); // 30

// Real world example
// Function to calculate the total price with tax
function totalPrice(price, taxRate) {
  return price + price * taxRate;
}

// Partially applied function with a fixed tax rate
const totalPriceWithTax = partial(totalPrice, 0.2);

// Usage
const price = totalPriceWithTax(100); // 120
console.log(price); // 120

// Partial application helper function
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}
