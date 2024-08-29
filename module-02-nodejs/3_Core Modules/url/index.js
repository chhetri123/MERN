const URL = require("url");

const myUrl = new URL("https://example.com:8080/path?query=value#hash");

console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Search:", myUrl.search);
console.log("Hash:", myUrl.hash);
