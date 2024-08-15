import logger from "./logger.js";

// Simulate different parts of an application using the logger
function appStart() {
  logger.log("Application has started");
}

function userLogin(username) {
  logger.log(`User ${username} has logged in`);
}

function dataFetch() {
  logger.log("Data has been fetched");
}

appStart();
userLogin("JohnDoe");
dataFetch();

logger.printLogCount(); // Should show 3 logs
