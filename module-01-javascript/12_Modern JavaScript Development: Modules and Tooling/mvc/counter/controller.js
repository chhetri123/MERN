import updateData from "./model.js";

const button = document.querySelector(".button");

const counter = document.querySelector(".test");
console.log(button);

button.addEventListener("click", () => {
  let count = parseInt(counter.textContent) || 0;
  console.log(count);
  console.log("From controller");
  const updatedData = updateData(count);
  render(updatedData);
});

function render(data) {
  console.log("Rendering");
  counter.textContent = data;
}
