const counterValue = document.getElementById("counter-value");
const increaseBtn = document.querySelector(".btn.increase");
const decreaseBtn = document.querySelector(".btn.decrease");
const resetBtn = document.querySelector(".btn.reset");

//
function countWithStyle(count) {
  if (count > 0) {
    counterValue.style.color = "green";
  } else if (count < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "black";
  }

  counterValue.innerText = count;
}

//
increaseBtn.addEventListener("click", function () {
  let counter = Number(counterValue.innerText) + 1;

  countWithStyle(counter);
});

decreaseBtn.addEventListener("click", function () {
  let counter = Number(counterValue.innerText) - 1;

  countWithStyle(counter);
});

resetBtn.addEventListener("click", function () {
  counterValue.innerText = 0;
  countWithStyle(0);
});
