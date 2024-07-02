# JavaScript Export Types

JavaScript offers multiple ways to export functionality from a module. This README covers the main types: **default exports**, **named exports**, and **aggregating exports**.

## Default Exports

A module can have only one default export. It is used to export a single value from a module.

### Example

**file: `defaultExport.js`**

```javascript
// Exporting a single value (a function in this case) as the default export
export default function greet() {
  console.log("Hello, World!");
}
```

**file: `main.js`**

```javascript
// Importing the default export from the module
import greet from "./defaultExport.js";

greet(); // Output: Hello, World!
```

## Named Exports

A module can have multiple named exports. Each export is identified by a name.

### Example

**file: `namedExports.js`**

```javascript
// Exporting multiple values by their names
export const name = "Alice";
export function greet() {
  console.log(`Hello, ${name}!`);
}
```

**file: `main.js`**

```javascript
// Importing named exports from the module
import { name, greet } from "./namedExports.js";

console.log(name); // Output: Alice
greet(); // Output: Hello, Alice!
```

## Renaming Exports

You can rename exports both during export and import.

### Example

**file: `renamedExports.js`**

```javascript
const originalName = "Bob";
function originalGreet() {
  console.log(`Hi, ${originalName}!`);
}

// Renaming exports during export
export { originalName as name, originalGreet as greet };
```

**file: `main.js`**

```javascript
// Renaming imports
import { name as userName, greet as sayHello } from "./renamedExports.js";

console.log(userName); // Output: Bob
sayHello(); // Output: Hi, Bob!
```

## Aggregating Exports

You can re-export from other modules to aggregate multiple modules into a single module.

### Example

**file: `module1.js`**

```javascript
export const name1 = "Charlie";
```

**file: `module2.js`**

```javascript
export const name2 = "Dana";
```

**file: `aggregator.js`**

```javascript
// Re-exporting from other modules
export { name1 } from "./module1.js";
export { name2 } from "./module2.js";
```

**file: `main.js`**

```javascript
// Importing from the aggregator module
import { name1, name2 } from "./aggregator.js";

console.log(name1); // Output: Charlie
console.log(name2); // Output: Dana
```

## Mixed Exports

A module can use both default and named exports.

### Example

**file: `mixedExports.js`**

```javascript
const defaultExport = "Default Export";
const namedExport1 = "Named Export 1";
const namedExport2 = "Named Export 2";

export default defaultExport;
export { namedExport1, namedExport2 };
```

**file: `main.js`**

```javascript
// Importing both default and named exports
import defaultVal, { namedExport1, namedExport2 } from "./mixedExports.js";

console.log(defaultVal); // Output: Default Export
console.log(namedExport1); // Output: Named Export 1
console.log(namedExport2); // Output: Named Export 2
```
