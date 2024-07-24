// ### Changing Text Content

let header = document.getElementById("header");
header.textContent = "Updated Header Text";

// ### Changing HTML Content

let container = document.getElementById("container");
container.innerHTML = "<p>New HTML content</p>";

// ### Changing Attributes

let link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
let hrefValue = link.getAttribute("href");
console.log(hrefValue);
link.removeAttribute("href");

// ### Changing Styles

let box = document.getElementById("box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "red";

// ### Handling Click Events

let button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Button clicked!");
});

// ### Combining Methods and Event Handling

button = document.querySelector("button");
button.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  newDiv.textContent = "New Div Created!";
  newDiv.style.color = "green";
  document.body.appendChild(newDiv);
});
