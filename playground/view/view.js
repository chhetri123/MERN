const btn = document.getElementById("btn");
const inputData = document.getElementById("input");

function eventListen(another) {
  btn.addEventListener("click", () => {
    const userValue = inputData.value;
    another(userValue);
    inputData.value = "";
  });
}

function renderUser(users) {
  document.getElementById("createList").innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = user.name;
    document.getElementById("createList").appendChild(li);
  });
}
export { eventListen, renderUser };
