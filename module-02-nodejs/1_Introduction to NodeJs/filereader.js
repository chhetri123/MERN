const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:");
  console.log(data);
});

// Taks

const path = require("path");
function listDirectoryContents(dirPath) {
  try {
    const contents = fs.readdirSync(dirPath);
    const results = contents.map((item) => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      return {
        name: item,
        isFile: stats.isFile(),
        isDirectory: stats.isDirectory(),
      };
    });
    return results;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

// Example usage:
const dirPath = "/path/to/your/directory";
const contents = listDirectoryContents(dirPath);
console.log(contents);
// Output example:
// [
//   { name: 'file1.txt', isFile: true, isDirectory: false },
//   { name: 'subdir1', isFile: false, isDirectory: true },
//   { name: 'file2.js', isFile: true, isDirectory: false },
//   // more items...
// ]
