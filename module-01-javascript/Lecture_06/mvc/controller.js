import { UserModel } from "./model.js";
import { UserView } from "./view.js";

document.addEventListener("DOMContentLoaded", function () {
  const userModel = new UserModel();
  const userView = new UserView();

  userView.userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = userView.getUsername();
    userModel.addUser({ name: username });
    userView.clearForm();
    userView.renderUserList(userModel.getUsers());
  });
});
