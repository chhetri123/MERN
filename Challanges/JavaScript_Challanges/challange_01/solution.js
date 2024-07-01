/**********************
 *
 * Challange 1 solution
 *
 */
// Step 1: Create the curried function
function curriedAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Step 2: Use the curried function
const add5 = curriedAdd(5);
const result = add5(10)(15); // 30

console.log(result); // 30

/**********************
 *
 * Challange 2 solution
 *
 *
 */

function curriedConcat(str1) {
  return function (str2) {
    return function (str3) {
      return str1 + str2 + str3;
    };
  };
}

// Step 2: Use the curried function
const helloConcat = curriedConcat("Hello");
const result = helloConcat(", ")("World!"); // "Hello, World!"

console.log(result); // "Hello, World!"

/**********************
 *
 * Challange 3 solution
 *
 *
 */
/ Step 1: Create the function
function multiply(x, y, z) {
  return x * y * z;
}

// Step 2: Create the partial application function
function partialMultiply(x, y) {
  return function (z) {
    return multiply(x, y, z);
  };
}

// Step 3: Use the partial function
const multiplyBy2And3 = partialMultiply(2, 3);
const result = multiplyBy2And3(4); // 24

console.log(result); // 24

/**********************
 *
 * Challange 4 solution
 *
 * 
 */

function calculateDiscount(price, discount, tax) {
  const discountedPrice = price - price * discount;
  const finalPrice = discountedPrice + discountedPrice * tax;
  return finalPrice;
}

// Step 2: Create the partial application function
function partial(fn, ...presetArgs) {
  return function (...remainingArgs) {
    return fn(...presetArgs, ...remainingArgs);
  };
}

// Step 3: Use the partial function
const calculatePrice = partial(calculateDiscount, 0.1, 0.05);
const result = calculatePrice(100); // 94.5

console.log(result); // 94.5