// Array methods

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach()
arr.forEach((el) => {
  console.log(el);
});

// map()
const array = arr.map((el) => {
  return el * 2;
});
console.log(array);

// filter()
const filterArray = arr.filter((el) => {
  return el < 5;
});
console.log(filterArray);

// reduce()
const reducedValue = arr.reduce((acc, el) => {
  if (el % 2 === 0) {
    return acc + el;
  }
  return acc;
}, 0);
/* How it works? 
acc=0;
el=1;
acc+el=1

acc=1,
el=2;
acc+el=3

acc=3,
el=3,
acc+el=6

acc=6,
el=4

*/
console.log(reducedValue);

// sort()
const sortedArray = arr.sort((a, b) => {
  return a - b;
});
console.log(sortedArray);
