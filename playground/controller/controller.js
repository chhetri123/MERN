import { addUser, removeUser, getUsers } from "../model/model.js";
import { eventListen, renderUser } from "../view/view.js";

eventListen((userData) => {
  addUser(userData);

  const users = getUsers();
  renderUser(users);

  //

  //
});
