const userList = [];

function addUser(user) {
  const newUser = {
    name: user,
  };
  userList.push(newUser);
}

function removeUser(index) {
  userList.splice(index, 1);
}

function getUsers() {
  return userList;
}

export { addUser, removeUser, getUsers };
