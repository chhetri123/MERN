// Challange 1 solution

let temperature = 5;

// Step 2 and 3: Check the temperature and print a message
if (temperature <= 0) {
  console.log("It's freezing!");
} else {
  console.log("It's not freezing.");
}

// Challange 2 solution

let temperature = 25;
let isCelsius = true;

let convertedTemp;
if (isCelsius) {
  convertedTemp = (temperature * 9) / 5 + 32;
  console.log(temperature + "°C is " + convertedTemp + "°F");
} else {
  convertedTemp = ((temperature - 32) * 5) / 9;
  console.log(temperature + "°F is " + convertedTemp + "°C");
}

// ## Challenge 3: Temperature Status Solution

let tempStatus;
if (isCelsius) {
  tempStatus =
    temperature <= 0 ? "freezing" : temperature >= 100 ? "boiling" : "moderate";
} else {
  tempStatus =
    temperature <= 32
      ? "freezing"
      : temperature >= 212
      ? "boiling"
      : "moderate";
}

console.log("The temperature is " + tempStatus);

// Challange 4: Solution

let message =
  (tempStatus === "freezing" && "Brrr, it's freezing!") ||
  (tempStatus === "boiling" && "It's boiling hot!") ||
  "The temperature is moderate.";

console.log(message);

// Challange 5: Solution

let isEven = temperature % 2 === 0;
console.log("The temperature is " + (isEven ? "even" : "odd"));


// Combine Solution 


let temperature = 25;
let isCelsius = true;

// Convert temperature
let convertedTemp;
if (isCelsius) {
  convertedTemp = (temperature * 9) / 5 + 32;
  console.log(temperature + "°C is " + convertedTemp + "°F");
} else {
  convertedTemp = ((temperature - 32) * 5) / 9;
  console.log(temperature + "°F is " + convertedTemp + "°C");
}

// Determine temperature status
let tempStatus;
if (isCelsius) {
  tempStatus =
    temperature <= 0 ? "freezing" : temperature >= 100 ? "boiling" : "moderate";
} else {
  tempStatus =
    temperature <= 32
      ? "freezing"
      : temperature >= 212
      ? "boiling"
      : "moderate";
}

// Create temperature message
let message =
  (tempStatus === "freezing" && "Brrr, it's freezing!") ||
  (tempStatus === "boiling" && "It's boiling hot!") ||
  "The temperature is moderate.";

// Check if temperature is even or odd
let isEven = temperature % 2 === 0;

// Print all information
console.log("Temperature status: " + tempStatus);
console.log("Message: " + message);
console.log("The temperature is " + (isEven ? "even" : "odd"));
```
