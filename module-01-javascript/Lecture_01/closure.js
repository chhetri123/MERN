console.log("hello");

function firstFunction() {
  var firstVar = "hello";

  function secondFunction() {
    var secondVar = "world";
    console.log(firstVar + " " + secondVar);
  }

  return secondFunction;
}

const first = firstFunction();
first();
