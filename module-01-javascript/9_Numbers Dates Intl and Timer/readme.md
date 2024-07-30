### Numbers, Dates, Intl, and Timers

---

#### 9.1. Converting and Checking Numbers

**Conversion:**

- `Number(value)`: Converts a value to a number.
- `parseInt(value, base)`: Parses a string and returns an integer of the specified base.
- `parseFloat(value)`: Parses a string and returns a floating-point number.

**Checking:**

- `Number.isFinite(value)`: Checks if the value is a finite number.
- `Number.isNaN(value)`: Checks if the value is `NaN` (Not-a-Number).

**Examples:**

```js
console.log(Number("23")); // 23
console.log(parseInt("30px", 10)); // 30
console.log(parseFloat("2.5rem")); // 2.5

console.log(Number.isFinite(20)); // true
console.log(Number.isNaN("NaN")); // false
```

---

#### 9.2. Math and Rounding

**Math Methods:**

- `Math.sqrt(value)`: Returns the square root of a number.
- `Math.max(a, b, ...)`: Returns the largest of zero or more numbers.
- `Math.min(a, b, ...)`: Returns the smallest of zero or more numbers.
- `Math.random()`: Returns a pseudo-random number between 0 and 1.

**Rounding:**

- `Math.trunc(value)`: Returns the integer part of a number.
- `Math.round(value)`: Rounds to the nearest integer.
- `Math.ceil(value)`: Rounds up to the next largest integer.
- `Math.floor(value)`: Rounds down to the next smallest integer.

**Examples:**

```js
console.log(Math.sqrt(25)); // 5
console.log(Math.max(5, 10, 15)); // 15
console.log(Math.min(5, 10, 15)); // 5

console.log(Math.trunc(4.9)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
```

---

#### 9.3. The Remainder Operator

- The remainder operator `%` returns the remainder of a division.

**Examples:**

```js
console.log(5 % 2); // 1
console.log(8 % 3); // 2
```

---

#### 9.4. Working with BigInt

- `BigInt` is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.
- Created by appending `n` to the end of an integer.

**Examples:**

```js
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n

console.log(10n + 20n); // 30n
```

---

#### 9.5. Creating Dates

- `new Date()`: Creates a new date object with the current date and time.
- `new Date(dateString)`: Creates a new date object from a date string.
- `new Date(year, month, day, hour, minute, second, millisecond)`: Creates a new date object with the specified date and time.

**Examples:**

```js
console.log(new Date()); // Current date and time
console.log(new Date("2024-07-22")); // July 22, 2024
console.log(new Date(2024, 6, 22, 10, 33, 30)); // July 22, 2024 10:33:30
```

---

#### 9.6. Adding Dates

- Store transaction dates.
- Display dates in the transaction log.
- Calculate days passed since the transaction.

**Example:**

```js
const transactionDate = new Date("2024-07-22T10:33:30Z");
const daysPassed = (new Date() - transactionDate) / (1000 * 60 * 60 * 24);
console.log(daysPassed); // Number of days since the transaction date
```

---

#### 9.7. Operations With Dates

- `getFullYear()`: Gets the year.
- `getMonth()`: Gets the month (0-11).
- `getDate()`: Gets the day of the month.
- `getDay()`: Gets the day of the week (0-6).
- `getHours()`: Gets the hours.
- `getMinutes()`: Gets the minutes.
- `getSeconds()`: Gets the seconds.

**Examples:**

```js
const now = new Date();
console.log(now.getFullYear()); // Current year
console.log(now.getMonth()); // Current month
console.log(now.getDate()); // Current date
console.log(now.getDay()); // Current day of the week
console.log(now.getHours()); // Current hour
console.log(now.getMinutes()); // Current minute
console.log(now.getSeconds()); // Current second
```

---

#### 9.8. Internationalizing Dates (Intl)

- `Intl.DateTimeFormat`: An object that allows language-sensitive date and time formatting.

**Examples:**

```js
const now = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(now)); // e.g., Monday, July 22, 2024
console.log(new Intl.DateTimeFormat("de-DE", options).format(now)); // e.g., Montag, 22. Juli 2024
```

---

#### 9.9. Internationalizing Numbers (Intl)

- `Intl.NumberFormat`: An object that allows language-sensitive number formatting.

**Examples:**

```js
const number = 1234567.89;

console.log(new Intl.NumberFormat("en-US").format(number)); // 1,234,567.89
console.log(new Intl.NumberFormat("de-DE").format(number)); // 1.234.567,89
console.log(new Intl.NumberFormat("en-IN").format(number)); // 12,34,567.89
```

---

#### 9.10. Timers: setTimeout and setInterval

- `setTimeout(callback, delay, ...args)`: Calls a function after a specified delay (in milliseconds).
- `setInterval(callback, interval, ...args)`: Calls a function at specified intervals (in milliseconds).

**Examples:**

```js
// setTimeout
setTimeout(() => {
  console.log("This will log after 2 seconds");
}, 2000);

// setInterval
setInterval(() => {
  console.log("This will log every 2 seconds");
}, 2000);
```
