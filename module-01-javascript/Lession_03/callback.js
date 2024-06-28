function greet(name, callback) {
  console.log(name);
  callback(name);
}

function hello(data) {
  console.log("Hello !! " + data);
}
greet("hari", hello);

function sum(a, b, callback) {
  console.log("Main function called ");
  const addition = a + b;
  console.log("Addition is passing to callback function");
  callback(addition);
}

function display(data) {
  console.log("Callback function is called from MAIN function");
  console.log(data);
}

sum(5, 6, display);
sum(65, 7, display);
sum(100, 100, display);

/*----------------------------------------------------------------
 ************ Advance CallBack  ************
 * Asyncronous callbacks
 *
 *
 *----------------------------------------------------------------*/

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

function fetchUserData(id, callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const user = users.find((user) => user.id === id);

    if (!user) {
      callback(null);
      return;
    }
    callback(user);
  }, 2000);
}

function display(user) {
  if (user) {
    console.log(`name: ${user.name}`);
    console.log(`email: ${user.email}`);
  } else {
    console.log("User not found");
  }
}

fetchUserData(2, display);
fetchUserData(4, display);
