export class UserView {
  constructor() {
    this.userForm = document.getElementById("user-form");
    this.userList = document.getElementById("user-list");
  }

  getUsername() {
    return document.getElementById("username").value;
  }

  clearForm() {
    this.userForm.reset();
  }

  renderUserList(users) {
    this.userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      this.userList.appendChild(li);
    });
  }
}
