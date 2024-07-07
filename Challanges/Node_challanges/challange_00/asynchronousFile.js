const fs = require("fs").promises;

async function processFile() {
  try {
    const data = await fs.readFile("input.txt", "utf8");
    const uppercaseData = data.toUpperCase();
    await fs.writeFile("output.txt", uppercaseData);
    console.log("File processing complete!");
  } catch (err) {
    console.error("Error processing file:", err);
  }
}

processFile();
