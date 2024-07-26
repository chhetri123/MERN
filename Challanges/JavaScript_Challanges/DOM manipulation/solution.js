// Selecting Elements

// Task 1
const firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);

// Task 2
const taskItems = document.querySelectorAll(".task-item");
taskItems.forEach((item) => console.log(item.textContent));

// Task 3
const header = document.getElementById("header");
header.style.backgroundColor = "blue";

// Task 4
const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.classList.add("highlight"));

// Task 5
const firstButtonInContainer = document.querySelector(".container button");
console.log(firstButtonInContainer.textContent);

// Manipulating Content

// Task 6
const firstHeading = document.querySelector("h1");
firstHeading.textContent = "Welcome to My Website";

// Task 7
const todoList = document.getElementById("todo-list");
const newItem = document.createElement("li");
newItem.textContent = "New Item";
todoList.appendChild(newItem);

// Task 8
const contentDiv = document.getElementById("content");
contentDiv.innerHTML = "<p>This is new content</p>";

// Task 9
const notes = document.querySelectorAll(".note");
notes.forEach((note) => (note.textContent = "Updated Note"));

// Task 10
const introSection = document.querySelector(".intro");
const introParagraph = document.createElement("p");
introParagraph.textContent = "Introduction";
introSection.prepend(introParagraph);

// Manipulating Attributes

// Task 11
const userInfo = document.getElementById("user-info");
userInfo.setAttribute("data-user", "admin");

// Task 12
const profilePic = document.getElementById("profile-pic");
profilePic.src = "https://www.example.com/new-image.jpg";

// Task 13
const submitBtn = document.querySelector(".submit-btn");
submitBtn.removeAttribute("disabled");

// Task 14
const anchors = document.querySelectorAll("a");
anchors.forEach((anchor) => (anchor.href = "https://www.example.com"));

// Task 15
const subscribeCheckbox = document.getElementById("subscribe");
subscribeCheckbox.checked = !subscribeCheckbox.checked;

// Manipulating Styles

// Task 16
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => (paragraph.style.fontSize = "18px"));

// Task 17
const showPopupBtn = document.getElementById("show-popup");
const popup = document.getElementById("popup");
showPopupBtn.addEventListener("click", () => {
  popup.classList.add("visible");
});

// Task 18
const items = document.querySelectorAll(".item");
items.forEach((item) => item.classList.remove("hidden"));

// Task 19
const menu = document.getElementById("menu");
menu.style.display = "none";

// Task 20
const highlightDiv = document.querySelector(".highlight");
highlightDiv.addEventListener("mouseover", () => {
  highlightDiv.style.backgroundColor = "yellow";
});

// Creating and Removing Elements

// Task 21
const alertDiv = document.createElement("div");
alertDiv.className = "alert";
alertDiv.textContent = "This is an alert";
document.body.appendChild(alertDiv);

// Task 22
const container = document.getElementById("container");
if (container.firstChild) {
  container.removeChild(container.firstChild);
}

// Task 23
const card = document.querySelector(".card");
const cardClone = card.cloneNode(true);
const cardContainer = document.querySelector(".card-container");
cardContainer.appendChild(cardClone);

// Task 24
const tasksList = document.querySelector(".tasks");
const newListItem = document.createElement("li");
newListItem.textContent = "Inserted Item";
tasksList.insertBefore(newListItem, tasksList.children[1]);

// Task 25
const mainDiv = document.getElementById("main");
while (mainDiv.firstChild) {
  mainDiv.removeChild(mainDiv.firstChild);
}

// Event Handling

// Task 26
const alertBtn = document.getElementById("alert-btn");
alertBtn.addEventListener("click", () => {
  alert("Button clicked!");
});

// Task 27
const nameInput = document.getElementById("name-input");
nameInput.addEventListener("keyup", () => {
  console.log(nameInput.value);
});

// Task 28
const logo = document.getElementById("logo");
logo.addEventListener("mouseover", () => {
  logo.style.opacity = 0.5;
});

// Task 29
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
});

// Task 30
const inputFields = document.querySelectorAll("input");
inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("focused");
  });
});
