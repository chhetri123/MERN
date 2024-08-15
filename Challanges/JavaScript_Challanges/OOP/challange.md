# OOP in JavaScript - Coding Challenges

## Constructor Function and Prototype Challenges

### Challenge 1: Book Management System

Create a constructor function `Book` to manage book details such as title, author, and genre. Implement a prototype method `describe` to return a string describing the book.

### Challenge 2: Vehicle Inventory

Create a constructor function `Vehicle` to manage vehicle details like make, model, and year. Implement a prototype method `getAge` to return the vehicle's age.

### Challenge 3: Bank Account Management

Create a constructor function `BankAccount` for managing bank accounts with properties like accountNumber, accountHolder, and balance. Implement prototype methods `deposit` and `withdraw`.

### Challenge 4: Employee Records

Create a constructor function `Employee` to manage employee details like name, position, and salary. Implement a prototype method `getAnnualSalary` to calculate the annual salary.

### Challenge 5: Library System

Create a constructor function `Library` to manage books in a library. Implement prototype methods `addBook`, `removeBook`, and `findBook` by title.

### Challenge 6: Task Management

Create a constructor function `Task` to manage tasks with properties like title, description, and status. Implement prototype methods `completeTask` and `isComplete`.

### Challenge 7: Shopping Cart

Create a constructor function `ShoppingCart` to manage items in a shopping cart. Implement prototype methods `addItem`, `removeItem`, and `calculateTotal`.

### Challenge 8: Movie Database

Create a constructor function `Movie` to manage movie details like title, director, and year. Implement a prototype method `getMovieInfo`.

### Challenge 9: Student Management

Create a constructor function `Student` to manage student details like name, age, and grades. Implement prototype methods `addGrade`, `getAverageGrade`, and `getDetails`.

### Challenge 10: Restaurant Menu

Create a constructor function `MenuItem` to manage menu item details like name, category, and price. Implement a prototype method `getDetails`.

### Challenge 11: Order Management

Create a constructor function `Order` to manage order details like orderNumber, customerName, and items. Implement prototype methods `addItem` and `getTotal`.

### Challenge 12: Pet Management

Create a constructor function `Pet` to manage pet details like name, type, and age. Implement prototype methods `describe` and `celebrateBirthday`.

# Classes

### Challenge 1: Creating Classes and Instances

1. Create a `Car` class with properties `make`, `model`, and `year`. Instantiate two `Car` objects and log their properties.

### Challenge 2: Adding Methods to Classes

2. Add a method `getCarInfo` to the `Car` class that returns a string with the car's make, model, and year. Call this method on both car objects.

### Challenge 3: Using Inheritance

3. Create a `ElectricCar` class that inherits from `Car` and adds a property `batteryCapacity`. Instantiate an `ElectricCar` object and log its properties.

### Challenge 4: Overriding Methods

4. Override the `getCarInfo` method in the `ElectricCar` class to include battery capacity. Call this method on an `ElectricCar` object.

### Challenge 5: Encapsulation with Constructor Functions

5. Create a `BankAccount` constructor function with private properties `balance` and a method `deposit` to increase the balance. Log the balance after making a deposit.

### Challenge 6: Encapsulation with ES6 Classes

6. Rewrite the `BankAccount` example using ES6 classes and private fields. Ensure the balance is protected.

### Challenge 7: Using Getters and Setters

7. Add a getter `getBalance` and a setter `setBalance` to the `BankAccount` class to retrieve and update the balance. Demonstrate their usage.

### Challenge 8: Method Chaining

8. Create a `Library` class with methods `addBook`, `removeBook`, and `getBooks`. Allow method chaining and demonstrate it.

### Challenge 9: Static Methods

9. Add a static method `compareAge` to a `Person` class that compares the age of two person objects. Demonstrate its usage.

### Challenge 10: Prototypal Inheritance

10. Create an object `animal` with a method `speak`. Create another object `dog` that inherits from `animal` and overrides `speak`. Demonstrate both methods.

### Challenge 11: `Object.create`

11. Use `Object.create` to create a `cat` object that inherits from `animal` and has its own method `meow`. Demonstrate inheritance and method calling.

### Challenge 12: Inheriting Built-In Objects

12. Extend the `Array` prototype with a method `last` that returns the last element of the array. Demonstrate its usage.

### Challenge 13: Implementing Polymorphism

13. Create a base class `Shape` with a method `area`. Create subclasses `Circle` and `Square` that override the `area` method. Demonstrate polymorphism.

### Challenge 14: Abstract Classes and Methods

14. Create an abstract class `Animal` with an abstract method `makeSound`. Subclasses `Dog` and `Cat` should implement `makeSound`. Demonstrate usage.

### Challenge 15: Aggregation

15. Create classes `Book` and `Author`. Each book should have an author. Demonstrate the relationship by creating instances.

### Challenge 16: Composition

16. Create a class `Engine` and a class `Car` that has an engine. Demonstrate composition by creating instances and showing the relationship.

## Project Based Challange

### Question 1: To-Do List Manager

**Scenario:**
You are building a to-do list manager for a productivity app. The app should allow users to add tasks, remove tasks, mark tasks as completed, filter tasks by their status (completed/incomplete), and display the total count of tasks.

**Instructions:**

1. **Task Class:**

   - Implement a `Task` class with the following properties and methods:
     - **Properties:**
       - `description` (string): The text of the task.
       - `completed` (boolean): Indicates whether the task is completed.
     - **Methods:**
       - `markCompleted()`: Sets the `completed` property to `true`.

2. **ToDoList Class:**

   - Create a `ToDoList` class to manage an array of `Task` objects.
   - **Methods:**
     - `addTask(description)`: Adds a new `Task` with the given description to the list.
     - `removeTask(index)`: Removes the task at the specified index.
     - `markTaskCompleted(index)`: Marks the task at the specified index as completed.
     - `getTotalCount()`: Returns the total number of tasks in the list.
     - `filterTasksByStatus(status)`: Filters tasks based on their completion status. (`status` can be `'completed'` or `'incomplete'`.)

3. **DOM Manipulation:**

   - Set up an HTML page with the following elements:
     - An input field with the ID `taskDescription` for entering new tasks.
     - A button with the ID `addTaskButton` to add the new task.
     - An unordered list with the ID `taskList` to display tasks.
     - A span with the ID `totalCount` to show the total number of tasks.
   - Use JavaScript to:
     - Add an event listener to the `addTaskButton` that retrieves the value from the `taskDescription` input field, adds it as a new task, clears the input field, and updates the displayed task list.
     - Implement the `displayTasks()` function to:
       - Clear the current list.
       - Create a list item (`<li>`) for each task, with a button to mark the task as completed.
       - Add the class `completed` to completed tasks for styling.
       - Append the task items and buttons to the `taskList`.
       - Update the `totalCount` span with the total number of tasks.

4. **Additional Features:**
   - Implement task filtering functionality. Add a dropdown or set of buttons to filter tasks based on their completion status (e.g., "All", "Completed", "Incomplete"). Update the displayed task list based on the selected filter.

**Example HTML Structure:**

- Use solution index.html file

**JavaScript Requirements:**

- Implement the `Task` and `ToDoList` classes in `script.js`.
- Ensure that your code effectively interacts with the HTML elements and updates the task list and total count as specified.

**Hints:**

- Use `document.createElement` to create new DOM elements.
- Use `element.appendChild` to add elements to the DOM.
- Update the `displayTasks` function to handle task filtering based on status.

### Question 2: Library System

**Scenario:**
You are creating a library system that allows users to manage their book collections. The system should allow users to add books, remove books, search for books by title, and display the total number of books. Additionally, users should be able to filter books by their reading status (read/unread).

**Requirements:**

1. Create a `Book` class with properties for the book title, author, and reading status.
2. Implement a `Library` class that manages an array of `Book` objects.
3. Provide methods to add a new book, remove a book by its title, search for books by title, and filter books by their reading status.
4. Implement a method to get the total count of books.
5. Use DOM manipulation to display the list of books, their details, and the total book count on the web page.

**Instructions:**

1. **Book Class:**

   - Implement a `Book` class with the following properties and methods:
     - **Properties:**
       - `title` (string): The title of the book.
       - `author` (string): The author of the book.
       - `borrowed` (boolean): Indicates whether the book has been borrowed.
     - **Methods:**
       - `markBorrowed()`: Sets the `borrowed` property to `true`.

2. **Library Class:**

   - Create a `Library` class to manage an array of `Book` objects.
   - **Methods:**
     - `addBook(title, author)`: Adds a new `Book` with the given title and author to the library.
     - `removeBook(index)`: Removes the book at the specified index.
     - `markBookBorrowed(index)`: Marks the book at the specified index as borrowed.
     - `getTotalCount()`: Returns the total number of books in the library.

3. **DOM Manipulation:**
   - Set up an HTML page with the following elements:
     - An input field with the ID `bookTitle` for entering the book's title.
     - An input field with the ID `bookAuthor` for entering the book's author.
     - A button with the ID `addBookButton` to add the new book to the library.
     - An unordered list with the ID `bookList` to display the list of books.
     - A span with the ID `totalBooks` to show the total number of books in the library.
   - Use JavaScript to:
     - Add an event listener to the `addBookButton` that retrieves the values from the `bookTitle` and `bookAuthor` input fields, adds the book to the library, clears the input fields, and updates the displayed list of books.
     - Implement the `displayBooks()` function to:
       - Clear the current list of books.
       - Create a list item (`<li>`) for each book, including buttons to mark the book as borrowed and to remove the book from the library.
       - Add the class `borrowed` to list items representing borrowed books for styling.
       - Append the list items and buttons to the `bookList`.
       - Update the `totalBooks` span with the total number of books in the library.

**Example HTML Structure:**

- Use solution index.html file

**Additional Features:**

- Implement functionality to allow users to filter books based on their status (borrowed or available). Add a dropdown or set of buttons to filter the displayed list of books based on their borrowed status (e.g., "All", "Borrowed", "Available").

**Hints:**

- Use `document.createElement` to create new DOM elements dynamically.
- Use `element.appendChild` to add elements to the DOM.
- Update the `displayBooks` function to handle filtering based on the book's borrowed status.

### Question 3: Expense Tracker

**Scenario:**
You are creating an expense tracker application to help users manage their expenses. The application should allow users to add expenses, remove expenses, categorize expenses, filter expenses by category, and display the total amount spent.

**Requirements:**

1. Create an `Expense` class with properties for the expense description, amount, and category.
2. Implement an `ExpenseTracker` class that manages an array of `Expense` objects.
3. Provide methods to add a new expense, remove an expense by its description, categorize expenses, and filter expenses by category.
4. Implement a method to calculate and display the total amount spent.
5. Use DOM manipulation to display the list of expenses, their details, and the total amount spent on the web page.

**Instructions:**

1. **Expense Class:**

   - Implement an `Expense` class with the following properties:
     - **Properties:**
       - `name` (string): The name of the expense.
       - `amount` (number): The amount of the expense.
       - `category` (string): The category of the expense (e.g., Food, Transport, Entertainment).

2. **ExpenseTracker Class:**

   - Create an `ExpenseTracker` class to manage an array of `Expense` objects.
   - **Methods:**
     - `addExpense(name, amount, category)`: Adds a new `Expense` with the specified name, amount, and category to the tracker.
     - `removeExpense(index)`: Removes the expense at the specified index.
     - `getTotalExpense()`: Returns the total amount of all expenses.
     - `displayExpenses()`: Dynamically displays the list of expenses and updates the total expense amount.

3. **DOM Manipulation:**
   - Set up an HTML page with the following elements:
     - An input field with the ID `expenseName` for entering the name of the expense.
     - An input field with the ID `expenseAmount` for entering the amount of the expense.
     - A dropdown with the ID `expenseCategory` for selecting the category of the expense.
     - A button with the ID `addExpenseButton` to add the new expense.
     - A div with the ID `expenseList` to display the list of expenses.
     - A span with the ID `totalExpense` to show the total amount of expenses.
   - Use JavaScript to:
     - Add an event listener to the `addExpenseButton` that retrieves the values from the `expenseName`, `expenseAmount`, and `expenseCategory` fields, adds the expense to the tracker, clears the input fields, and updates the displayed list of expenses.
     - Implement the `displayExpenses()` function to:
       - Clear the current list of expenses.
       - Create a div element (`<div>`) for each expense, displaying the name, category, and amount.
       - Add a "Remove" button next to each expense to allow users to remove an expense.
       - Append the expense items and buttons to the `expenseList`.
       - Update the `totalExpense` span with the total amount of all expenses.

**Additional Features:**

- Implement functionality to filter expenses by category. Allow users to view only the expenses under a specific category (e.g., Food, Transport).
- Add validation to ensure the `expenseAmount` is a positive number.

**Hints:**

- Use `document.createElement` to dynamically create DOM elements.
- Use `element.appendChild` to add elements to the DOM.
- Update the `displayExpenses` function to handle filtering based on the selected category.

### Question 4: Inventory Management System

**Scenario:**
You are developing an inventory management system for a small business. The system should track products, add new products, remove products, update product quantities, and display products based on their quantity status (in stock/out of stock).

**Requirements:**

1. Create a `Product` class with properties for the product name, quantity, and a method to update the quantity.
2. Implement an `Inventory` class that manages an array of `Product` objects.
3. Provide methods to add a new product, remove a product by its name, update a product’s quantity, and filter products based on their quantity status.
4. Implement a method to display the total number of products.
5. Use DOM manipulation to display the list of products and their quantities on the web page.

**Instructions:**

1. **Product Class:**

   - Implement a `Product` class with the following properties:
     - **Properties:**
       - `name` (string): The name of the product.
       - `category` (string): The category of the product.
       - `quantity` (number): The quantity of the product in stock.
       - `price` (number): The price per unit of the product.
       - `dateAdded` (Date): The date when the product was added to the inventory.
       - `id` (string): A unique identifier for each product.
     - **Method:**
       - `getTotalValue()`: Returns the total value of the product (quantity multiplied by price).

2. **Inventory Class:**

   - Create an `Inventory` class to manage the list of products.
   - **Methods:**
     - `addProduct(product)`: Adds a new `Product` object to the inventory and updates the display.
     - `deleteProduct(id)`: Deletes a product from the inventory by its unique ID and updates the display.
     - `updateProduct(id, updatedProduct)`: Updates the details of a product by its ID and updates the display.
     - `displayProducts()`: Displays all products in a table and updates the inventory summary.
     - `editProduct(id)`: Populates the form fields with the product's details for editing.
     - `handleFormSubmit(event)`: Handles the form submission for adding or updating a product. If an ID is provided, it updates the product; otherwise, it adds a new product.
     - `updateSummary()`: Updates the summary section showing the total number of products, the total quantity in stock, and the total value of all products.
     - `clearForm()`: Clears the form fields after submission.

3. **DOM Manipulation:**
   - Set up an HTML page with the following elements:
     - An input form for product details:
       - `name` (input field): The name of the product.
       - `category` (input field): The category of the product.
       - `quantity` (input field): The quantity in stock.
       - `price` (input field): The price per unit.
       - A hidden input field `product-id` to store the unique ID of the product (used for editing).
     - A submit button to add or update the product.
     - A table with the ID `product-table-body` to display the products.
     - A summary section with the following IDs:
       - `totalProducts` to display the total number of products.
       - `totalQuantity` to display the total quantity in stock.
       - `totalValue` to display the total value of all products.
   - Use JavaScript to:
     - Attach an event listener to the form for submission, which calls the `handleFormSubmit` method.
     - Implement the `displayProducts()` method to:
       - Clear the current table rows.
       - Create a row for each product, displaying its attributes.
       - Add "Edit" and "Delete" buttons for each product, with the respective functionality.
       - Update the summary section with the total number of products, the total quantity, and the total value.

**Additional Features:**

- Implement a search or filter feature to find products by name or category.
- Add a validation step to ensure that `quantity` and `price` are positive numbers.

**Hints:**

- Use `document.createElement` to dynamically create DOM elements.
- Use `element.appendChild` to add elements to the DOM.
- Use `toFixed(2)` to format prices to two decimal places.
