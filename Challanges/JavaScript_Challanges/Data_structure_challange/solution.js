// Advanced JavaScript Features - Task Solutions

// Task 1: Array Destructuring
console.log("\n1. Array Destructuring");
const books = [
  "1984",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Catcher in the Rye",
];
const [book1, book2, book3, ...otherBooks] = books;
console.log(book1, book2, book3);
console.log(otherBooks);

// Task 2: Object Destructuring
console.log("\n2. Object Destructuring");
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Silver",
};
const { make, model, year, color, price = 20000 } = car;
console.log(make, model, year, color, price);

// Task 3: Spread Operator
console.log("\n3. Spread Operator");
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);
const extendedNumbers = [...combinedNumbers, 7, 8];
console.log(extendedNumbers);

// Task 4: Rest Parameters
console.log("\n4. Rest Parameters");
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
console.log(calculateAverage(1, 2, 3, 4, 5));

// Task 5: Short Circuiting
console.log("\n5. Short Circuiting");
function getUserName(user) {
  return user && user.name && user.name !== "" ? user.name : "Anonymous";
}
console.log(getUserName({ name: "John" }));
console.log(getUserName({ name: "" }));
console.log(getUserName({}));

// Task 6: Nullish Coalescing
console.log("\n6. Nullish Coalescing");
function setProductDefaults(product) {
  return {
    ...product,
    discount: product.discount ?? 0,
    stock: product.stock ?? "Out of stock",
  };
}
console.log(setProductDefaults({ name: "Laptop", price: 1000 }));
console.log(
  setProductDefaults({ name: "Phone", price: 500, discount: 10, stock: 50 })
);

// Task 7: For-of Loop
console.log("\n7. For-of Loop");
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

// Task 8: Combined Challenge
console.log("\n8. Combined Challenge");
function performOperation(options, ...numbers) {
  const { operation } = options;
  let result;

  switch (operation) {
    case "add":
      result = 0;
      for (const num of numbers) {
        result += num;
      }
      break;
    case "multiply":
      result = 1;
      for (const num of numbers) {
        result *= num;
      }
      break;
    default:
      throw new Error("Invalid operation");
  }

  return result;
}

console.log(performOperation({ operation: "add" }, 1, 2, 3, 4));
console.log(performOperation({ operation: "multiply" }, 2, 3, 4));

// 9. Enhanced Object Literals
console.log("Task 9: Enhanced Object Literals");

const bookProperty = "publicationYear";

const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  [bookProperty]: 2008,
  displayInfo() {
    console.log(
      `${this.title} by ${this.author}, published in ${this.publicationYear}`
    );
  },
};

book.displayInfo();

console.log("\n");

// 10. Optional Chaining
console.log("Task 10: Optional Chaining");

const company = {
  name: "TechCorp",
  departments: {
    IT: {
      employees: [
        { name: "Alice", email: "alice@techcorp.com" },
        { name: "Bob", email: "bob@techcorp.com" },
      ],
    },
    HR: {
      employees: [{ name: "Charlie", email: "charlie@techcorp.com" }],
    },
  },
};

function getEmployeeEmail(departmentName, employeeIndex) {
  return (
    company.departments[departmentName]?.employees[employeeIndex]?.email ??
    "Email not found"
  );
}

console.log(getEmployeeEmail("IT", 0)); // alice@techcorp.com
console.log(getEmployeeEmail("HR", 1)); // Email not found
console.log(getEmployeeEmail("Finance", 0)); // Email not found

console.log("\n");

// 11 Looping Objects
console.log("Task 11: Looping Objects");

const studentGrades = {
  math: 95,
  science: 88,
  history: 92,
  literature: 85,
};

function calculateAverageGrade(grades) {
  const entries = Object.entries(grades);
  const sum = entries.reduce((acc, [subject, grade]) => acc + grade, 0);
  return sum / entries.length;
}

console.log(
  `Average grade: ${calculateAverageGrade(studentGrades).toFixed(2)}`
);

console.log("\n");

// 12. Sets
console.log("Task 12: Sets");

const numbersWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 3];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log("Unique numbers:", uniqueNumbers);

console.log("\n");

// 13. Maps: Fundamentals
console.log("Task 13: Maps: Fundamentals");

const countries = new Map();

function addCountry(name, capital) {
  countries.set(name, capital);
}

function getCapital(name) {
  return countries.get(name) || "Not found";
}

function hasCountry(name) {
  return countries.has(name);
}

addCountry("France", "Paris");
addCountry("Japan", "Tokyo");
addCountry("Australia", "Canberra");

console.log("Capital of Japan:", getCapital("Japan"));
console.log("Is Brazil in the map?", hasCountry("Brazil"));

console.log("\n");

// 14. Maps: Iteration
console.log("Task 14: Maps: Iteration");

function getCountriesStartingWith(letter) {
  return Array.from(countries.keys()).filter((country) =>
    country.startsWith(letter)
  );
}

console.log("Countries starting with 'A':", getCountriesStartingWith("A"));

console.log("\n");

// 15. Working With Strings
console.log("Task 15: Working With Strings");

function analyzeSentence(sentence) {
  const words = sentence.split(/\s+/);
  return {
    wordCount: words.length,
    longestWord: words.reduce((longest, word) =>
      word.length > longest.length ? word : longest
    ),
    capitalizedSentence: words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  };
}

const sentenceAnalysis = analyzeSentence(
  "the quick brown fox jumps over the lazy dog"
);
console.log("Sentence analysis:", sentenceAnalysis);

console.log("\n");

// 16. Combined Challenge
console.log("Task 16: Combined Challenge");

function analyzeText(text) {
  // Normalize text: lowercase and remove punctuation
  const normalizedText = text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const words = normalizedText.split(/\s+/);

  // Find unique words using Set
  const uniqueWordsSet = new Set(words);

  // Count occurrences using Map
  const wordCounts = new Map();
  for (const word of words) {
    wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
  }

  // Create and sort the result array
  const result = Array.from(uniqueWordsSet)
    .map((word) => ({
      word,
      count: wordCounts.get(word),
    }))
    .sort((a, b) => b.count - a.count);

  return result;
}

const sampleText =
  "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.";
console.log("Text analysis result:", analyzeText(sampleText));

console.log("\n");
